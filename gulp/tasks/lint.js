'use strict';

var config = require('../config');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

// jshint
gulp.task('jshint', function() {
    return gulp.src([config.scripts.src, config.scripts.exclude])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// jscs
gulp.task('jscs', function () {
  return gulp.src([config.scripts.src, config.scripts.exclude])
    .pipe(jscs());
});

// Lint will run code quality task: jscs and jshint
gulp.task('lint', ['jscs', 'jshint']);
