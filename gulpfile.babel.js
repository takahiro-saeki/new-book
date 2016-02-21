import gulp from 'gulp';
import requireDir from 'require-dir';
requireDir('./gulp');

gulp.task('default', ['css', 'js', 'ejs', 'webserver', 'watch', 'img']);
