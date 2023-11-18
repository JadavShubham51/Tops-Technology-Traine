<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'le@y&7sGgOO=ZHq0|#EOO/t01ytQ{tz86z8;/A:U[1.S0yy$VK]DzZjuOKN!.$kt' );
define( 'SECURE_AUTH_KEY',  'ZP 9bm2@<HPx811_&w`..rilV>PcY0:::!Yy9o&W,*H`fY}HhF-~+`{k*aRtu0Mr' );
define( 'LOGGED_IN_KEY',    '5kfQ>?sUM)-uf_}:B`3)r:Uemm&0,+k8s)Xdx=5.B d~:SaJuriK,,[$ei^Sx73N' );
define( 'NONCE_KEY',        '58jI3UgZf+6z+}hOrzqp`JJ&aO=ijV})-Yn!2[R0+-8k!6(Z+L-}h#v[, Lm5Tc!' );
define( 'AUTH_SALT',        'j^nu<8BM-0Uwpv/:dwT#g5N}J}0 CQFrK<h/ekFbrV#{2vpe?2|).oA)%tL7My-;' );
define( 'SECURE_AUTH_SALT', '+8zD56_GW;yXW=.B4-Xa0T[f$V 5m[~S#P&Vn+:N%O3w{(}.Tj3;LgVC.`|hEbk7' );
define( 'LOGGED_IN_SALT',   '8yCW^xEm#Vtrp36-)Dw[GC(r5P,[o>;`)v[kZ+]euoQ$t@6/=/3ekzfDSa:R+HRl' );
define( 'NONCE_SALT',       'DE0cTWaTbNxd4gu|evGa#&fM9}f?!kkIajnj3`ji5=#)}l7%Wk.-/}FZ,Ep-<rzG' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
