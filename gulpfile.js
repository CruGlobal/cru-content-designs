const { src, watch, dest } = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

sass.compiler = require('node-sass');

// Compilation function
function compileSCSS(origDir, message = 'Styles processed', destDir = '') {
  if (destDir == '') { destDir = origDir; }
  return src(`./${origDir}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(`./${destDir}`))
    .pipe(notify({ message: message, onLast: true }));
}

// Watch and compile everything
exports.default = function() {
  watch(`./scss/**/*.scss`, () => compileSCSS('scss', 'Branding styles processed', 'css'));
  watch(`./cruorg/**/*.scss`, () => compileSCSS('cruorg', 'Cru.org styles processed'));
}
