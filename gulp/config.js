'use strict';

module.exports = {

    'browserport': 3000,
    'serverport': 3002,
    'serverstart': 'index.html',

    'browserify': {
        'entries': ['./src/script/main.js'],
        'bundleName': 'main.js',
        'sourcemap': true
    },

    'dist': {
        'root': 'build'
    },

    'fonts': {
        'src': 'src/fonts/**/*',
        'dest': 'build/fonts'
    },

    'gzip': {
        'src': 'build/**/*.{html,xml,json,css,js,js.map}',
        'dest': 'build/',
        'options': {}
    },

    'images': {
        'src': 'src/images/**/*',
        'dest': 'build/images'
    },

    'scripts': {
        'src': 'src/script/**/*.js',
        'dest': 'build/script'
    },

    'styles': {
        'src': 'src/styles/**/*.scss',
        'dest': 'build/css',
        'include': ['./node_modules/susy/sass', './src/styles']
    },

    'test': {
        'karma': 'test/karma.conf.js'
    },

    'views': {
        'src': 'src/views/**/*.jade',
        'exclude': '!src/views/**/*-inc.jade',
        'dest': 'build/'
    }

};
