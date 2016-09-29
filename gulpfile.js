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

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: "./dist"
  });
  gulp.watch("dist/css/*.css", ['css']);
  gulp.watch("dist/*.html").on('change', browserSync.reload);
});

// Watch
gulp.task('watch', function(){
  gulp.watch('./src/css/*.css', ['css', browserSync.reload]);
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['css', 'browser-sync', 'watch']);