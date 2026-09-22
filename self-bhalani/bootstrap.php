<?php
/**
 * Shared bootstrap for every self-bhalani/ admin page: loads config, opens the
 * DB connection, starts a hardened session, and provides small helpers
 * (h(), db(), currentUser()) used across login/logout/dashboard and every
 * future admin page. Not a page itself - .htaccess blocks direct requests
 * to it, every admin page does `require __DIR__ . '/bootstrap.php';` first.
 */

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '0'); // never leak errors/paths to visitors; see the server's PHP error log instead

const SESSION_NAME = 'rtmaktu_admin';

function config(): array
{
    static $config = null;
    if ($config === null) {
        $file = __DIR__ . '/../config/config.php';
        if (!is_file($file)) {
            http_response_code(500);
            exit('config/config.php not found. Copy config/config.sample.php to config/config.php and fill in the database credentials.');
        }
        $config = require $file;
    }
    return $config;
}

function db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $c = config();
        try {
            $pdo = new PDO(
                sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $c['db_host'], $c['db_name']),
                $c['db_user'],
                $c['db_pass'],
                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
            );
        } catch (PDOException $e) {
            // display_errors is off site-wide, so a raw PDOException here would
            // otherwise just be a blank page - show one plain line instead
            // (never the exception message, which includes the DB name/host).
            http_response_code(500);
            exit('Database connection failed. Check config/config.php\'s db_host/db_name/db_user/db_pass.');
        }
    }
    return $pdo;
}

/** HTML-escape for output. */
function h(string $s): string
{
    return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function isHttps(): bool
{
    return (!empty($_SERVER['HTTPS']) && strtolower((string)$_SERVER['HTTPS']) !== 'off')
        || (($_SERVER['SERVER_PORT'] ?? '') === '443')
        || (strtolower((string)($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '')) === 'https');
}

// ---- session --------------------------------------------------------------
// Cookie is httponly + strict + (on production, where the site is served over
// HTTPS) secure, so the session id never reaches JS or travels unencrypted.
if (session_status() === PHP_SESSION_NONE) {
    session_name(SESSION_NAME);
    session_set_cookie_params([
        'lifetime' => 0,
        'path'     => '/',
        'domain'   => '',
        'secure'   => isHttps(),
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
    session_start();
}

// Never let an admin page get cached (browser or shared proxy) - every page
// here can carry another user's name/data.
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
header('X-Robots-Tag: noindex, nofollow');
header('Referrer-Policy: no-referrer');
header('X-Content-Type-Options: nosniff');

/**
 * Returns the logged-in user's session data, or null if nobody is logged in.
 * Does NOT hit the database - auth-check.php does that re-validation.
 */
function currentUser(): ?array
{
    if (empty($_SESSION['user_id'])) {
        return null;
    }
    return [
        'id'    => (int)$_SESSION['user_id'],
        'name'  => (string)$_SESSION['user_name'],
        'email' => (string)$_SESSION['user_email'],
        'role'  => (string)$_SESSION['user_role'],
    ];
}

/** One CSRF token per session, reused across forms/tabs; compared with hash_equals(). */
function csrfToken(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function csrfField(): string
{
    return '<input type="hidden" name="csrf_token" value="' . h(csrfToken()) . '">';
}

function csrfValid(): bool
{
    $sent = (string)($_POST['csrf_token'] ?? '');
    return $sent !== '' && hash_equals(csrfToken(), $sent);
}
