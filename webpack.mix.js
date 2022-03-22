let mix = require('laravel-mix');
require('laravel-mix-simple-image-processing')

mix.js('src/app.js', '/')
    .imgs({
        source: 'src/img',
        destination: 'img',
    })
    .setPublicPath('/');