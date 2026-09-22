<?php
/**
 * `require __DIR__ . '/auth-check.php';` at the top of any admin page that
 * must be logged in to view - login.php itself does not include this.
 *
 * Re-checks the user against the database on every request (not just the
 * session) so a deactivated account or a role change by an Administrator
 * takes effect immediately on that user's very next page load, per
 * ROLES.md: "Every permission is checked on the server for every request."
 *
 * Also enforces must_change_password: while that flag is set, every page
 * except change-password.php itself redirects there.
 */

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

$user = currentUser();
if ($user === null) {
    header('Location: login.php');
    exit;
}

$st = db()->prepare('SELECT is_active, role, name, must_change_password FROM users WHERE id = ?');
$st->execute([$user['id']]);
$row = $st->fetch();

if ($row === false || (int)$row['is_active'] !== 1) {
    // Account deleted or deactivated since login - end the session now.
    $_SESSION = [];
    session_destroy();
    header('Location: login.php?reason=deactivated');
    exit;
}

// Keep the session in sync in case an Administrator changed this user's
// name/role after they logged in.
$_SESSION['user_role'] = $row['role'];
$_SESSION['user_name'] = $row['name'];
$user['role'] = $row['role'];
$user['name'] = $row['name'];

$onChangePasswordPage = basename($_SERVER['SCRIPT_NAME']) === 'change-password.php';
if ((int)$row['must_change_password'] === 1 && !$onChangePasswordPage) {
    header('Location: change-password.php?forced=1');
    exit;
}
