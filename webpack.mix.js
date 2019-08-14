const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/assets/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .copy("resources/assets/vendor/font-awesome/fonts", "public/fonts")
    .styles(
        [
            "resources/assets/vendor/bootstrap/css/bootstrap.css",
            "resources/assets/vendor/css/base.css",
            "resources/assets/vendor/animate/animate.css",
            "resources/assets/vendor/font-awesome/css/font-awesome.css"
        ],
        "public/css/vendor.css",
        "./"
    );
mix.scripts(
    [
        "resources/assets/vendor/easing/easing.min.js",
        "resources/assets/vendor/counterup/counterup.min.js",
        "resources/assets/vendor/bootstrap/js/bootstrap.min.js",
        "resources/assets/vendor/jquery/jquery-migrate.min.js",
        "resources/assets/vendor/superfish/hoverIntent.js",
        "resources/assets/vendor/superfish/superfish.min.js",
        "resources/assets/vendor/waypoints/waypoints.min.js",
        "resources/assets/vendor/wow/wow.min.js",
        "resources/assets/js/base.js",
        "resources/assets/js/contactform.js"
    ],
    "public/js/base.js",
    "./"
);

if (mix.inProduction()) {
    mix.version();
}
