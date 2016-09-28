var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');
 
gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 10 chrome versions', 'last 10 Safari versions']})
  ];
  return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));
});