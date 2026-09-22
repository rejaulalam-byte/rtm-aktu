<?php
/**
 * Admin login. Session-based auth; password checked with password_verify()
 * against users.password_hash (written by password_hash(PASSWORD_DEFAULT) -
 * see database/create-admin.php).
 *
 * Brute-force protection lives in the `users` table itself (failed_attempts,
 * locked_until columns already in schema.sql): 5 wrong passwords for one
 * email locks that account for 15 minutes. Every attempt (right or wrong,
 * known email or not) is also logged to `login_attempts` for a server-side
 * audit trail - that table is not what enforces the lock.
 */

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_MINUTES     = 15;

// Already logged in? Skip the form.
if (currentUser() !== null) {
    header('Location: dashboard.php');
    exit;
}

function clientIp(): string
{
    return (string)($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
}

function logAttempt(?string $email, bool $succeeded): void
{
    $st = db()->prepare('INSERT INTO login_attempts (ip, email, succeeded) VALUES (?, ?, ?)');
    $st->execute([clientIp(), $email, $succeeded ? 1 : 0]);
}

$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrfValid()) {
        $error = 'Your session expired. Please try again.';
    } else {
        $email    = strtolower(trim((string)($_POST['email'] ?? '')));
        $password = (string)($_POST['password'] ?? '');

        if ($email === '' || $password === '') {
            $error = 'Enter your e-mail and password.';
        } else {
            $pdo = db();
            $st = $pdo->prepare('SELECT id, name, email, password_hash, role, is_active, failed_attempts, locked_until FROM users WHERE email = ?');
            $st->execute([$email]);
            $user = $st->fetch();

            if ($user === false) {
                // No such account - still run password_verify against a dummy hash so
                // a real vs. unknown email takes the same amount of time to reject.
                password_verify($password, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');
                logAttempt($email, false);
                $error = 'Incorrect e-mail or password.';
            } else {
                // A lock that has already expired is cleared lazily on the next attempt.
                $lockedUntil = $user['locked_until'] !== null ? new DateTimeImmutable($user['locked_until']) : null;
                if ($lockedUntil !== null && $lockedUntil <= new DateTimeImmutable('now')) {
                    $pdo->prepare('UPDATE users SET failed_attempts = 0, locked_until = NULL WHERE id = ?')->execute([$user['id']]);
                    $user['failed_attempts'] = 0;
                    $lockedUntil = null;
                }

                if ($lockedUntil !== null) {
                    $minutesLeft = max(1, (int)ceil(($lockedUntil->getTimestamp() - time()) / 60));
                    $error = "Too many failed attempts. Try again in $minutesLeft minute" . ($minutesLeft === 1 ? '' : 's') . '.';
                    logAttempt($email, false);
                } elseif (!password_verify($password, $user['password_hash'])) {
                    $attempts = (int)$user['failed_attempts'] + 1;
                    if ($attempts >= MAX_FAILED_ATTEMPTS) {
                        $pdo->prepare('UPDATE users SET failed_attempts = 0, locked_until = DATE_ADD(NOW(), INTERVAL ? MINUTE) WHERE id = ?')
                            ->execute([LOCKOUT_MINUTES, $user['id']]);
                        $error = 'Too many failed attempts. Try again in ' . LOCKOUT_MINUTES . ' minutes.';
                    } else {
                        $pdo->prepare('UPDATE users SET failed_attempts = ? WHERE id = ?')->execute([$attempts, $user['id']]);
                        $left = MAX_FAILED_ATTEMPTS - $attempts;
                        $error = 'Incorrect e-mail or password. ' . $left . ' attempt' . ($left === 1 ? '' : 's') . ' left before this account is locked.';
                    }
                    logAttempt($email, false);
                } elseif ((int)$user['is_active'] !== 1) {
                    $error = 'This account has been deactivated. Contact an administrator.';
                    logAttempt($email, false);
                } else {
                    // Success.
                    $pdo->prepare('UPDATE users SET failed_attempts = 0, locked_until = NULL, last_login_at = NOW() WHERE id = ?')
                        ->execute([$user['id']]);
                    logAttempt($email, true);

                    session_regenerate_id(true); // new session id on privilege change, prevents session fixation
                    $_SESSION['user_id']    = (int)$user['id'];
                    $_SESSION['user_name']  = $user['name'];
                    $_SESSION['user_email'] = $user['email'];
                    $_SESSION['user_role']  = $user['role'];

                    header('Location: dashboard.php');
                    exit;
                }
            }
        }
    }
}

$reason = (string)($_GET['reason'] ?? '');
if ($reason === 'deactivated' && $error === null) {
    $error = 'Your account has been deactivated. Contact an administrator.';
} elseif ($reason === 'timeout' && $error === null) {
    $error = 'You were signed out.';
}
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>Admin Login | RTM-AKTU</title>
<style>
  :root {
    --navy: #0C2350;
    --navy-light: #16305f;
    --gold: #C9A227;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--navy);
    font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    padding: 1.5rem;
  }
  .card {
    width: 100%;
    max-width: 380px;
    background: #ffffff;
    border-radius: 10px;
    padding: 2.25rem 2rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  }
  .card h1 {
    margin: 0 0 .25rem;
    font-size: 1.3rem;
    color: var(--navy);
  }
  .card p.sub {
    margin: 0 0 1.5rem;
    font-size: .85rem;
    color: #667;
  }
  label {
    display: block;
    font-size: .82rem;
    font-weight: 600;
    color: var(--navy);
    margin-bottom: .3rem;
  }
  .field { margin-bottom: 1.1rem; }
  input[type=email], input[type=password] {
    width: 100%;
    padding: .6rem .7rem;
    border: 1px solid #d3d8e0;
    border-radius: 6px;
    font-size: .95rem;
  }
  input[type=email]:focus, input[type=password]:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(201, 162, 39, .18);
  }
  button {
    width: 100%;
    padding: .7rem;
    border: none;
    border-radius: 6px;
    background: var(--navy);
    color: var(--gold);
    font-size: .95rem;
    font-weight: 700;
    cursor: pointer;
    transition: background .15s ease;
  }
  button:hover { background: var(--navy-light); }
  .error {
    background: #fdecea;
    color: #9d1f1f;
    border: 1px solid #f3c4c0;
    padding: .65rem .8rem;
    border-radius: 6px;
    font-size: .85rem;
    margin-bottom: 1.1rem;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: .6rem;
    margin-bottom: 1.5rem;
  }
  .brand .dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--gold);
    flex-shrink: 0;
  }
  .brand span {
    font-size: .78rem;
    letter-spacing: .04em;
    text-transform: uppercase;
    color: #778;
    font-weight: 700;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="brand"><span class="dot"></span><span>RTM-AKTU Admin</span></div>
    <h1>Sign in</h1>
    <p class="sub">Staff login for the admin panel.</p>
    <?php if ($error !== null): ?>
      <div class="error"><?= h($error) ?></div>
    <?php endif; ?>
    <form method="post" action="login.php" autocomplete="off">
      <?= csrfField() ?>
      <div class="field">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required autofocus
               value="<?= h((string)($_POST['email'] ?? '')) ?>">
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required autocomplete="current-password">
      </div>
      <button type="submit">Sign in</button>
    </form>
  </div>
</body>
</html>
