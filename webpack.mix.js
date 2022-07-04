let mix = require('laravel-mix');

mix.js('src/app.js', '/')
    .css('src/app.css', '/')
    .setPublicPath('/');