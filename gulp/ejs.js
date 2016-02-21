import gulp from 'gulp';
import ejs from 'gulp-ejs';
import paths from './path';
import fs from 'fs';

gulp.task('ejs', () => {
  let json = JSON.parse(fs.readFileSync('./assets/data/data.json'));
  gulp.src([paths.ejs, paths.ejsRemove])
  .pipe(ejs(json))
  .pipe(gulp.dest(paths.tempEjs))
});
