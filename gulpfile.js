const { src, watch, dest, parallel } = require('gulp');
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

const compileScssDir = () => compileSCSS('scss', 'Branding styles processed', 'css');
const compileCruorgDir = () => compileSCSS('cruorg', 'Cru.org styles processed');

// Build both directories once
exports.build = parallel(compileScssDir, compileCruorgDir);

// Watch and compile everything
exports.default = function() {
  watch(`./**/*.scss`, parallel(compileScssDir, compileCruorgDir));
  // watch(`./scss/**/*.scss`, compileScssDir);
  // watch(`./cruorg/**/*.scss`, compileCruorgDir);
}
