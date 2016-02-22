import gulp from 'gulp';
import postcss from 'gulp-postcss';
import PATHS from './path';

gulp.task('css', () => {
  let processors = [
    require('autoprefixer')({browsers: 'last 2 versions'}),
    require('postcss-partial-import'),
    require('postcss-mixins'),
    require('postcss-extend'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-size'),
    require('postcss-media-minmax'),
    require('postcss-color-function'),
    require('postcss-custom-media')
  ];

  return gulp.src(PATHS.CSS)
  .pipe(postcss(processors))
  .pipe(gulp.dest(PATHS.TEMP_CSS))
});
