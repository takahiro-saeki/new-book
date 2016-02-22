import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import PATHS from './path';

gulp.task('js', () => {
  browserify({
    entries: [PATHS.JS_Base]
  })
  .transform(babelify, {presets: ["es2015"]})
  .bundle()
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(gulp.dest(PATHS.TEMP_JS))
});
