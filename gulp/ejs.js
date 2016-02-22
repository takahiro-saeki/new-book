import gulp from 'gulp';
import ejs from 'gulp-ejs';
import PATHS from './path';
import fs from 'fs';

gulp.task('ejs', () => {
  let json = JSON.parse(fs.readFileSync('./assets/data/data.json'));
  gulp.src([PATHS.EJS, PATHS.EJS_REMOVE])
  .pipe(ejs(json))
  .pipe(gulp.dest(PATHS.TEMP_EJS))
});
