<?php
/**
 * Placeholder landing page after login. Real dashboard content (content
 * lists, quick actions, etc.) arrives with the content-editing forms in the
 * next phase - this just proves auth-check.php works and gives a logout link.
 */

declare(strict_types=1);

require_once __DIR__ . '/auth-check.php';

$user = currentUser();
$roleLabel = $user['role'] === 'administrator' ? 'Administrator' : 'Content Editor';
$notice = ($_GET['notice'] ?? '') === 'password_changed' ? 'You have successfully changed your password.' : null;
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>Dashboard | RTM-AKTU Admin</title>
<style>
  :root { --navy: #0C2350; --gold: #C9A227; }
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
    max-width: 640px;
    margin: 3rem auto;
    padding: 0 1.5rem;
  }
  .notice {
    background: #eaf3fb;
    color: #1c4e73;
    border: 1px solid #c3ddef;
    padding: .65rem .8rem;
    border-radius: 6px;
    font-size: .85rem;
    margin-bottom: 1rem;
  }
  .card {
    background: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(12, 35, 80, .08);
  }
  .card h1 { margin: 0 0 .4rem; color: var(--navy); font-size: 1.4rem; }
  .card p.role {
    display: inline-block;
    margin: 0;
    padding: .25rem .7rem;
    border-radius: 999px;
    background: rgba(201, 162, 39, .15);
    color: #8a6d1a;
    font-size: .78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .03em;
  }
</style>
</head>
<body>
  <header>
    <div class="brand">RTM-AKTU <span>Admin</span></div>
    <nav>
      <a href="change-password.php">Change Password</a>
      <a href="logout.php">Log out</a>
    </nav>
  </header>
  <main>
    <?php if ($notice !== null): ?>
      <div class="notice"><?= h($notice) ?></div>
    <?php endif; ?>
    <div class="card">
      <h1>Welcome, <?= h($user['name']) ?></h1>
      <p class="role"><?= h($roleLabel) ?></p>
    </div>
  </main>
</body>
</html>
