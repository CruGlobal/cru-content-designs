# Cru Content Designs

The purpose of this repository is firstly to provide consistent branding for Cru's online properties. It's designed to be included in other projects as a git submodule, an [NPM package](https://www.npmjs.com/package/@cruglobal/cru-content-designs), or CDN via `https://unpkg.com/browse/@cruglobal/cru-content-designs@{version number}/`. Web projects can utilize the classes found in the CSS files "out of the box" or `@use` the SCSS files into their own project's SCSS files and compile everything together for a custom stylesheet.

Secondly, this submodule serves as a development area for the core component styling for [cru.org](https://cru.org) which runs on [Adobe Experience Manager (AEM)](https://www.adobe.com/marketing/experience-manager.html). Those files can be found in `/cruorg`. The files here make use of SCSS variables and mixins defined in the `/scss` directory. Seeing how the designs for the core components were given as the examples of the desired cross-project consistent branding, it made sense to develop both in the same place.

## Disclaimer

This submodule is still early in its development. Variables, mixins, functions, and classes may change periodically right now. Use at your own risk. Please contact John Plastow with any questions.

## How to Incorporate into Your Project

There are a couple different ways this submodule can be incorporated into a project.

1. Link one of the CSS files located in `/css` in your HTML file. Inside those files you'll find lots of pre-defined classes that your web project can utilize. **WARNING: These files are currently incomplete.**
2. `@use` the SCSS files located in `/scss` in your own SCSS project and compile everything together for a custom stylesheet. 

You'll probably need these two files when using option #2:

```
@use '{local-path-to-this-projects-directory}/scss/variables';
@use '{local-path-to-this-projects-directory}/scss/mixins';
```

*Note - `@use` (and the similar `@forward`) at-rule are part of Sass's move to using modules rather than `@import`. You can find the documentation [here](https://sass-lang.com/documentation/at-rules). `@import` may still work for the time being, but it's scheduled to be deprecated in October 2021 and totally removed from Sass a year after that, so its use is not recommended.

## Using the SCSS Files

This is the more complex, but much more powerful, way to use this project. All the compiled CSS was originally written in SCSS (a syntax variation of the CSS preprocessing language [SASS](https://sass-lang.com/)) and have largely been sorted into sub-directories according to the type of data they contain, namely variables, mixins, and classes.

The power of the SCSS is found in the variables and mixins. If you use the variables and mixins in this project and we need to tweak something for the sake of Cru branding, your website will be automatically updated the next time you update the project in your development environment and recompile the stylesheets.

**Please use the variables and mixins! They were made for YOU!**

### Two Media Query Strategies

Much of the web development world uses a mobile-first responsive web development approach, writing CSS for mobile browser sizes first and then working their way up. AEM, on the other hand, uses a desktop-first-ish strategy, writing CSS for the largest browser size first and then covering the rest with a combination of `min-width` and `max-width` definitions, never overriding any styles except the largest.

Here's a comparison of the two responsive strategies using this submodule's default breakpoints: 768px and 1200px. We're going to set three different background colors to `body` - red on mobile, green on tablet, and blue on desktop.

```
Mobile-first                        AEM

body {                              body {
  background-color: red;              background-color: blue;
  @media (min-width: 768px) {         @media (max-width: 768px) {
    background-color: green;            background-color: red;
  }                                   }
  @media (min-width: 1200px) {        @media (min-width: 769px) and (max-width: 1200px) {
    background-color: blue;             background-color: green;
  }                                   }
}                                   }
```

### Setting Options

While this project is designed to keep branding consistent across various projects, there are some things that are customizable.

* `$cru-import-source-sans` imports the official Cru branding font Source Sans Pro. Default: `true`
* `$cru-import-material-icons` imports Material icons. Default: `false`
* `$cru-import-material-icons-round` imports rounded Material icons. Default: `false`
* `$cru-import-material-icons-outlined` imports outlined Material icons. Default: `false`
* `$cru-aem-media-queries` changes the output format of the media query mixins from mobile-first to AEM-style. Default: `false`

*Note - These options MUST be set when the first file is `@use`d that uses these options.

Inside `/scss` you'll find two non-underscored files: `aem.scss` and `mobile-first.scss`. These two files get compiled into their corresponding CSS files in `/css`. Both files `@use` the `_styles.scss` file and thus all the other files that `_styles.scss` `@forward`s. This project defaults to a mobile-first responsive strategy, so we have to tell it when we want to use AEM media queries instead. We do that by setting the variable `$cru-aem-media-queries` to `true` and passing it into `_styles.scss`. AEM  uses an additional breakpoint, 992px, that automatically gets utilized when `$cru-aem-media-queries` is `true`.

### Important Media Query Information

**Variables**

* `$cru-breakpoint-xs` Default: 0
* `$cru-breakpoint-md` Default: 768px
* `$cru-breakpoint-lg` Default: 992px (AEM only)
* `$cru-breakpoint-xl` Default: 1200px

**Mixins**

There are three important mixins that anyone using this project should be aware of. These auto-create the media queries necessary based on the breakpoints you're using and adjusts the pixel value when necessary depending on whether you're using AEM or mobile-first.

* `cru-media-breakpoint-down($var)` runs a `max-width` query, targeting everything at or below the value provided.
* `cru-media-breakpoint-between($var1, $var2)` runs a `min-width` and `max-width` query, targeting everything between (and including) the values provided.
* `cru-media-breakpoint-up($var)` runs a `min-width` query, targeting everything at or above the value provided.

Here's an example using that same `background-color` demo from above.

```
Mobile-first (original)             Mobile-first (w/ mixins)

body {                              body {
  background-color: red;              background-color: red;
  @media (min-width: 768px) {         @include cru-media-breakpoint-up($cru-breakpoint-md) {
    background-color: green;            background-color: green;
  }                                   }
  @media (min-width: 1200px) {        @include cru-media-breakpoint-up($cru-breakpoint-xl) {
    background-color: blue;             background-color: blue;
  }                                   }
}                                   }

AEM (original)                                              AEM (w/ mixins)

body {                                                      body {
  background-color: blue;                                     background-color: blue;
  @media (max-width: 768px) {                                 @include cru-media-breakpoint-down($cru-breakpoint-md) {
    background-color: red;                                      background-color: red;
  }                                                           }
  @media (min-width: 769px) and (max-width: 1200px) {         @include cru-media-breakpoint-between($cru-breakpoint-md, $cru-breakpoint-xl) {
    background-color: green;                                    background-color: green;
  }                                                           }
}                                                           }
```

*The mixins look like more work than regular media queries. Do I have to use them?* No, but the mixins help ensure consistency in how the queries are written, easability of changing breakpoint values, and automatically make adjustments to the breakpoint values when a +/- 1px is needed, so their use is strongly encouraged.

## Editing this Project

Realize that this project has the potential to impact numerous web properties, so please edit with caution. Create your own branch off of main, submit a pull request, and tag John Plastow for review/approval. This project uses [Node.js](https://nodejs.org/), [Node Package Manager](https://www.npmjs.com/), and [Gulp](https://www.npmjs.com/package/gulp). You'll first need to open a terminal to the submodule's location and run `npm install` to download all the necessary packages. Running the `gulp` command in your terminal will watch both the branding and cru.org SCSS files and automatically compile them when a file is changed. *Ctrl + C* will end the `gulp` process.

### Editing cru.org core component styles

If you're needing to work on cru.org core component styles, `/cruorg` contains everything you'll need. File paths in the rest of this section will be relative to `/cruorg`. Here's a breakdown of everything in that directory and how to use them:

* `/index.php` displays all the styled components once they've been uncommented from the array on lines 4-25.
* `/styles.scss` automatically pulls in and compiles the SCSS files from each component.
* `/styles.css` is the compiled version of `styles.scss`.
* `/dev.scss` adds a little more for the demo pages' styling.
* `/dev.css` is the compiled version of `dev.scss`.
* `/_branding-imports.scss` contains the branding variables and mixins needed for cru.org.
* `/components` contains individual directories for each component cru.org uses.
  * `{component}/{component}.php` is where the AEM HTML output for that component lives. Copy/paste the default HTML output from the AEM documentation found [here](https://www.aemcomponents.dev/). Though these files are meant for HTML, they're PHP so that repeating HTML output can be easily looped through. *Note - The components currently used by cru.org may not be fully up to date and thus not perfectly match up with the documentation page. Please verify the HTML with the cru.org staging environment.
  * `{component}/{component}.scss` is where all in-development SCSS code for that component should live until the pull request has been approved and merged. This includes new variables, mixins, functions, and style rules. The styles will then be moved out of the component and into the branding files as needed.
  * `{component}/{component}.css` is the compiled version of `{component.scss}`.

A few notes:

* Run `gulp` in your terminal to compile the SCSS.
* Edit only the files contained in `/cruorg`.
* Use the variables and mixins found in the branding files.
* If you need to add a class, place it on the outermost `<div>` of the HTML copy/pasted from the AEM documentation.
* I've created an `info` class to be used on the component PHP pages where you can write notes about any edits to the original HTML you made or special SCSS decisions. For an example of how these SCSS and PHP files work together, check out what's been done for the title component.

## Currently Used By

* Cru's main website - [cru.org](https://cru.org) (in progress)
* Cru Store (previously known as Cru Press) - [crustore.org](https://crustore.org) (on hold)
