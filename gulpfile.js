var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 10 chrome versions', 'last 10 Safari versions']}),
    stylelint,
    reporter({clearMessages: true})
  ];
  return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: "./dist"
  });
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./src/css/*.css', ['css', browserSync.reload]);
  gulp.watch('./src/*.html', ['html', browserSync.reload]);
});

gulp.task('default', ['css', 'browser-sync', 'watch']);