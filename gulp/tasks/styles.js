'use strict';

var config = require('../config');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src(config.styles.src)
        .pipe(gulpif(!global.isProd, sourcemaps.init()))
        .pipe(sass({includePaths: [ './node_modules/susy/sass', './src/styles' ],outputStyle: global.isProd ? 'compact':'extended'}))
        .on('error', handleErrors)
        .pipe(gulpif(!global.isProd, sourcemaps.write()))
        .pipe(gulpif(!global.isProd, sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(['*.css', '!*.map'], autoprefixer()))
        .pipe(gulpif(global.isProd, minifyCss({compatibility: 'ie8'})))
        .pipe(gulpif(!global.isProd, sourcemaps.write()))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({
            stream: true
        })));
});
