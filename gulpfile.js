const { src, watch, dest } = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

sass.compiler = require('node-sass');

var currentVersion = '0.3';

// Compilation function
function compileSCSS(origDir, message = 'Styles processed', destDir = '') {
  if (destDir == '') { destDir = origDir; }
  return src(`./v${currentVersion}/${origDir}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(`./v${currentVersion}/${destDir}`))
    .pipe(notify({ message: message, onLast: true }));
}

// Compile branding
function compileBrandingSCSS() {
  return compileSCSS('scss', 'Branding styles processed', 'css');
}
exports.buildBranding = function() {
  watch(`./v${currentVersion}/scss/**/*.scss`, compileBrandingSCSS);
}

// Compile cru.org styles
function compileCruorgSCSS() {
  return compileSCSS('cruorg', 'Cru.org styles processed');
}
exports.buildCruorg = function() {
  watch(`./v${currentVersion}/cruorg/**/*.scss`, compileCruorgSCSS);
}

// Compile everything
exports.default = function() {
  watch(`./v${currentVersion}/scss/**/*.scss`, compileBrandingSCSS);
  watch(`./v${currentVersion}/cruorg/**/*.scss`, compileCruorgSCSS);
}
