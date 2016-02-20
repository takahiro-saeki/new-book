import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import ejs from 'gulp-ejs';
import webserver from 'gulp-webserver';
import postcss from 'gulp-postcss';


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
    require('postcss-color-function')
  ];

  return gulp.src('./assets/css/*.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('./template/css'))
});

gulp.task('webserver', () => {
  gulp.src('template')
  .pipe(webserver({
    fallback: 'index.html',
    livereload: true,
    open: true
  }));
});

gulp.task('js', () => {
  browserify({
    entries: ['assets/js/common.js']
  })
  .transform(babelify, {presets: ["es2015"]})
  .bundle()
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(gulp.dest('template/js'))
});

gulp.task('watch', () => {
  gulp.watch('./assets/ejs/**/*.ejs', ['ejs']);
  gulp.watch('./assets/js/**/*.js', ['js']);
  gulp.watch('./assets/css/**/*.css', ['css']);
  gulp.watch('./assets/css/common/**/*.css', ['css']);
});

gulp.task('ejs', () => {
  gulp.src(['assets/ejs/*.ejs','!' + 'assets/ejs/**/_*.ejs'])
  .pipe(ejs())
  .pipe(gulp.dest('./template'))
})

gulp.task('default', ['css', 'js', 'ejs', 'webserver', 'watch']);
