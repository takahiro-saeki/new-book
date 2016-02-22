import gulp from 'gulp';
import imageminPngquant from 'imagemin-pngquant';
import PATHS from './path';

gulp.task('img', () => {
  return gulp.src(PATHS.IMG)
    .pipe(imageminPngquant({quality: '65-80', speed: 4})())
    .pipe(gulp.dest(PATHS.TEMP_IMG));
});
