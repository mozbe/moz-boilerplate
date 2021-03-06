'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['clean'], function(cb) {

    cb = cb || function() {};

    global.isProd = false;

    runSequence(['styles', 'views', 'images', 'fonts', 'browserify'], 'watch', cb);

});
