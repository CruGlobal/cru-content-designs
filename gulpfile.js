const { src, watch, dest, series } = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

sass.compiler = require('sass');

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

const buildAll = series(compileScssDir, compileCruorgDir);

// Build both directories once
exports.build = buildAll;

// Watch and compile everything
exports.default = function() {
  watch(`./**/*.scss`, buildAll);
  // watch(`./scss/**/*.scss`, compileScssDir);
  // watch(`./cruorg/**/*.scss`, compileCruorgDir);
}
