'use strict';

module.exports = function(config) {

    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine'],
        preprocessors: {
            'test/**/*.js': ['browserify']
        },
        browsers: ['PhantomJS'],
        reporters: ['progress'],

        autoWatch: true,
        colors: true,

        browserify: {
            debug: true,
            transform: []
        },

        files: [
            'test/**/*.js'
        ],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine','karma-browserify'],

        singleRun: true

    });

};
