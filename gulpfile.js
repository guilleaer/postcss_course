var gulp = require('gulp'),
    postcss = require('gulp-postcss');
 
gulp.task('css', function () {
  var processors = [
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});