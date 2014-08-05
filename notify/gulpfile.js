var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var nib = require('nib');

gulp.task('connect', function() {
  connect.server({
    port: 8080,
    livereload: true
  });
});


gulp.task('watch', function () {
  gulp.watch(['./css/**/*.styl'], ['stylus']);
  gulp.watch(['./css/**/*.css','./index.html'], ['reload']);
});

gulp.task('stylus', function () {
  gulp.src('./css/**/*.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('./css'));
});

gulp.task('reload', function () {
	gulp.src(['./css/**/*.css','./index.html'])
  		.pipe(connect.reload());
});


// Default gulp task to run
gulp.task('default', function(){
	gulp.run('connect','stylus','watch');
});