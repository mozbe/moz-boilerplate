'use strict';

var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

// jshint
gulp.task('jshint', function() {
    return gulp.src(config.scripts.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulpif(global.isProd, jshint.reporter('fail')));
});

// jscs
gulp.task('jscs', function() {
    return gulp.src(config.scripts.src)
        .pipe(jscs());
});

// Lint will run code quality task: jscs and jshint
gulp.task('lint', ['jscs', 'jshint']);
