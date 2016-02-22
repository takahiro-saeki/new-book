import gulp from 'gulp';
import webserver from 'gulp-webserver';
import PATHS from './path';

gulp.task('webserver', () => {
  gulp.src('template')
  .pipe(webserver({
    fallback: 'index.html',
    livereload: true,
    open: true
  }));
});

gulp.task('watch', () => {
  gulp.watch(PATHS.EJS_FULL, ['ejs']);
  gulp.watch(PATHS.JS_FULL, ['js']);
  gulp.watch(PATHS.CSS_FULL, ['css']);
  gulp.watch(PATHS.CSS_FULL_DIR, ['css']);
});
