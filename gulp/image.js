import gulp from 'gulp';
import imageminPngquant from 'imagemin-pngquant';
import paths from './path';

gulp.task('img', () => {
  return gulp.src(paths.img)
    .pipe(imageminPngquant({quality: '65-80', speed: 4})())
    .pipe(gulp.dest(paths.tempImg));
});
