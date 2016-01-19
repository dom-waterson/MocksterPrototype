var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var NwBuilder = require('node-webkit-builder');
var del = require('del');

gulp.task('build', ['clean'], function () {
  var nw = new NwBuilder({
    appName: 'Mockster',
    appVersion: '0.0.1',
    buildDir: 'dist',
    files: ['package.json', './app/**/*'],
    //macIcns: './app-icon.icns',
    //winIco: './app-icon.ico',
    platforms: ['win','osx'],
    version: '0.12.3'
  });
  nw.on('log', gutil.log);
  return nw.build().catch(gutil.log);
});

gulp.task('clean', function () {
  return del('dist/**');
});

gulp.task('serve', shell.task([
  './node_modules/nw/bin/nw . --debug'
]));
