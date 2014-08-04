var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});


gulp.task('watch', function () {
  gulp.watch(['./css/**/*.styl'], ['stylus']);
});

gulp.task('stylus', function () {
  gulp.src('./css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});


// Use nib
// Require nib
var nib = require('nib');
// either a String or an Array
gulp.task('nib', function () {
  gulp.src('./css/nib.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('./css/nib'));
});

// Default gulp task to run
gulp.task('default', function(){
	gulp.run('nib','stylus','watch');
});