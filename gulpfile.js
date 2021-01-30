const { src, watch, dest } = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

sass.compiler = require('node-sass');

var currentVersion = '0.2';

function compile() {
  return src(`./v${currentVersion}/scss/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(`./v${currentVersion}/css`))
    .pipe(notify('Styles processed'));
}

exports.buildCruBranding = function () {
  watch('./v' + currentVersion + '/scss/**/*.scss', compile);
}
