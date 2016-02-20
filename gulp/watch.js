import gulp from 'gulp';
import webserver from 'gulp-webserver';
import paths from './path';

gulp.task('webserver', () => {
  gulp.src('template')
  .pipe(webserver({
    fallback: 'index.html',
    livereload: true,
    open: true
  }));
});

gulp.task('watch', () => {
  gulp.watch(paths.ejsFull, ['ejs']);
  gulp.watch(paths.jsFull, ['js']);
  gulp.watch(paths.cssFull, ['css']);
  gulp.watch(paths.cssFullDir, ['css']);
});
