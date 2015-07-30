'use strict';

var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var jade = require('gulp-jade');

// Views task
gulp.task('views', function() {
    var YOUR_LOCALS = {};
    gulp.src(config.views.src)
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest(config.dist.root))
        .pipe(gulpif(browserSync.active, browserSync.reload({
            stream: true
        })));
});
