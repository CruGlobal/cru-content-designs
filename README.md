# Cru Branding Submodule

This submodule is still in its infantcy. Variables, mixins, functions, and classes will continue to change regularly right now. Use at your own risk. Please contact John Plastow with any questions.

The index.php file is just a sample file for demonstrating the current classes. During development, it's been run with a local server created by [MAMP](https://www.mamp.info/). A static HTML file may come in time.

### When used in another repository...

Compilation is handled by [Gulp](https://www.npmjs.com/package/gulp) by running `gulp buildCruBranding` on this submodule's directory.

To compile these styles for AEM breakpoints, make sure you've changed the value of `$cru-aem-responsive` to `true` in your own SCSS files before compilation.
