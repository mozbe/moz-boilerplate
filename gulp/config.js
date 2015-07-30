'use strict';

module.exports = {

    'browserport': 3000,
    'serverport': 3002,
    'serverstart': 'index.html',

    'styles': {
        'src': 'src/styles/**/*.scss',
        'dest': 'build/css'
    },

    'scripts': {
        'src': 'src/script/**/*.js',
        'dest': 'build/script' //,'exclude': '!src/app/templates.js'
    },

    'images': {
        'src': 'src/images/**/*',
        'dest': 'build/images'
    },

    'fonts': {
        'src': 'src/fonts/**/*',
        'dest': 'build/fonts'
    },

    'views': {
        'watch': [
            'src/index.html',
            'src/views/**/*.html'
        ],
        'src': 'src/views/**/*.html',
        'dest': 'src/app',
        'file': 'src/index.html'
    },

    'gzip': {
        'src': 'build/**/*.{html,xml,json,css,js,js.map}',
        'dest': 'build/',
        'options': {}
    },

    'dist': {
        'root': 'build'
    },

    'browserify': {
        'entries': ['./src/app/main.js'],
        'bundleName': 'main.js',
        'sourcemap': true
    },

    'test': {
        'karma': 'test/karma.conf.js',
        'protractor': 'test/protractor.conf.js',
        'src': 'test/e2e/**/*.js'
    },

    'icons': {
        'dest': "build/images/svgs",
        'src': '../../src/icons/icons.json',
        'tasks': 'src/icons/icons.json'
    }

};
