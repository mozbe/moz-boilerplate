'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');
var config = require('../config');

gulp.task('test', function() {
    return gulp.src('./thisdoesntexist')
        .pipe(karma({
            configFile: config.test.karma,
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

