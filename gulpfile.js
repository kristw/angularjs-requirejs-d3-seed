'use strict';

var gulp          = require('gulp');
var $             = require('gulp-load-plugins')();

/* Deployment */
gulp.task('gh-pages', function() {
  return gulp.src(__dirname + '/**/*')
    .pipe($.ghPages());
});