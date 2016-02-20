import gulp from 'gulp';
import ejs from 'gulp-ejs';
import paths from './path';

gulp.task('ejs', () => {
  gulp.src([paths.ejs, paths.ejsRemove])
  .pipe(ejs())
  .pipe(gulp.dest(paths.tempEjs))
});
