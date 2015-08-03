'use strict';

var config = require('../config');
var express = require('express');
var gulp = require('gulp');
var gutil = require('gulp-util');
var http = require('http');
var morgan = require('morgan');

gulp.task('server', function() {

    var server = express();

    server.use(morgan('dev'));
    server.use(express.static(config.dist.root));

    server.all('/*', function(req, res) {
        res.sendFile(config.serverstart, {
            root: 'build'
        });
    });

    var s = http.createServer(server);
    s.on('error', function(err) {
        if (err.code === 'EADDRINUSE') {
            gutil.log('Development server is already started at port ' + config.serverport);
        } else {
            throw err;
        }
    });

    s.listen(config.serverport);

});
