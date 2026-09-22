<?php
/**
 * Self-service password change, available to either role at any time from
 * dashboard.php's header. Also where auth-check.php redirects anyone whose
 * must_change_password flag is set - they land here (and only here; every
 * other page bounces them back) until they change it.
 */

declare(strict_types=1);

require_once __DIR__ . '/auth-check.php';

$user   = currentUser();
$forced = ($_GET['forced'] ?? '') === '1' || ($_POST['forced'] ?? '') === '1';
$error  = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrfValid()) {
        $error = 'Your session expired. Please try again.';
    } else {
        $current = (string)($_POST['current_password'] ?? '');
        $new1    = (string)($_POST['new_password'] ?? '');
        $new2    = (string)($_POST['new_password2'] ?? '');

        $pdo = db();
        $st = $pdo->prepare('SELECT password_hash FROM users WHERE id = ?');
        $st->execute([$user['id']]);
        $hash = (string)$st->fetchColumn();

        if ($current === '' || $new1 === '' || $new2 === '') {
            $error = 'Fill in all three fields.';
        } elseif (!password_verify($current, $hash)) {
            $error = 'Current password is incorrect.';
        } elseif (!hash_equals($new1, $new2)) {
            $error = 'New password and confirmation do not match.';
        } elseif (($e = passwordError($new1, $user['email'])) !== null) {
            $error = $e;
        } elseif (password_verify($new1, $hash)) {
            $error = 'New password must be different from your current password.';
        } else {
            $pdo->prepare('UPDATE users SET password_hash = ?, must_change_password = 0, password_changed_at = NOW() WHERE id = ?')
                ->execute([password_hash($new1, PASSWORD_DEFAULT), $user['id']]);
            $pdo->prepare('INSERT INTO audit_log (user_id, action, ip) VALUES (?, ?, ?)')
                ->execute([$user['id'], 'change_password', (string)($_SERVER['REMOTE_ADDR'] ?? '')]);

            header('Location: dashboard.php?notice=password_changed');
            exit;
        }
    }
}
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>Change Password | RTM-AKTU Admin</title>
<style>
  :root { --navy: #0C2350; --navy-light: #16305f; --gold: #C9A227; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    background: #f4f5f8;
  }
  header {
    background: var(--navy);
    color: #fff;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header .brand { font-weight: 700; letter-spacing: .02em; }
  header .brand span { color: var(--gold); }
  header nav { display: flex; gap: .6rem; }
  header a {
    color: #fff;
    background: rgba(255, 255, 255, .12);
    padding: .45rem .9rem;
    border-radius: 6px;
    font-size: .85rem;
    text-decoration: none;
  }
  header a:hover { background: rgba(255, 255, 255, .22); }
  main {
    max-width: 420px;
    margin: 3rem auto;
    padding: 0 1.5rem;
  }
  .card {
    background: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(12, 35, 80, .08);
  }
  .card h1 { margin: 0 0 .4rem; color: var(--navy); font-size: 1.3rem; }
  .card p.sub { margin: 0 0 1.5rem; font-size: .85rem; color: #667; }
  label {
    display: block;
    font-size: .82rem;
    font-weight: 600;
    color: var(--navy);
    margin-bottom: .3rem;
  }
  .field { margin-bottom: 1.1rem; }
  .hint { font-size: .78rem; color: #889; margin-top: .3rem; }
  input[type=password] {
    width: 100%;
    padding: .6rem .7rem;
    border: 1px solid #d3d8e0;
    border-radius: 6px;
    font-size: .95rem;
  }
  input[type=password]:focus {
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
  .notice {
    background: #eaf3fb;
    color: #1c4e73;
    border: 1px solid #c3ddef;
    padding: .65rem .8rem;
    border-radius: 6px;
    font-size: .85rem;
    margin-bottom: 1.1rem;
  }
</style>
</head>
<body>
  <header>
    <div class="brand">RTM-AKTU <span>Admin</span></div>
    <nav>
      <?php if (!$forced): ?><a href="dashboard.php">Dashboard</a><?php endif; ?>
      <a href="logout.php">Log out</a>
    </nav>
  </header>
  <main>
    <div class="card">
      <h1>Change password</h1>
      <?php if ($forced): ?>
        <p class="sub">Your password must be changed before you can continue.</p>
      <?php else: ?>
        <p class="sub">Signed in as <?= h($user['email']) ?></p>
      <?php endif; ?>
      <?php if ($error !== null): ?>
        <div class="error"><?= h($error) ?></div>
      <?php endif; ?>
      <form method="post" action="change-password.php<?= $forced ? '?forced=1' : '' ?>" autocomplete="off">
        <?= csrfField() ?>
        <?php if ($forced): ?><input type="hidden" name="forced" value="1"><?php endif; ?>
        <div class="field">
          <label for="current_password">Current password</label>
          <input type="password" id="current_password" name="current_password" required autocomplete="current-password" autofocus>
        </div>
        <div class="field">
          <label for="new_password">New password</label>
          <input type="password" id="new_password" name="new_password" required minlength="<?= MIN_PASSWORD_LENGTH ?>" autocomplete="new-password">
          <p class="hint">At least <?= MIN_PASSWORD_LENGTH ?> characters, and not your e-mail address.</p>
        </div>
        <div class="field">
          <label for="new_password2">Confirm new password</label>
          <input type="password" id="new_password2" name="new_password2" required autocomplete="new-password">
        </div>
        <button type="submit">Change password</button>
      </form>
    </div>
  </main>
</body>
</html>
