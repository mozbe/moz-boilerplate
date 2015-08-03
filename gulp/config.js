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
        //,'exclude': '!src/app/templates.js'
    },

    'styles': {
        'src': 'src/styles/**/*.scss',
        'dest': 'build/css'
    },

    'test': {
        'karma': 'test/karma.conf.js'
    },

    'views': {
        'src': ['src/views/**/*.jade', '!' + 'src/views/**/*-inc.jade'],
        'dest': 'build/'
    }

};
