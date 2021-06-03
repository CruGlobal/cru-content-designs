# Cru Content Designs

**LATEST VERSION: v0.4.0**

The purpose of this repository is firstly to provide consistent branding for Cru's online properties. It's designed to be included in other projects as a git submodule or as an [NPM package](https://www.npmjs.com/package/@cruglobal/cru-content-designs). Web projects can utilize the classes found in the CSS files "out of the box" or import the SCSS files into their own project's SCSS files and compile everything together for a custom stylesheet.

Secondly, this submodule serves as a development area for the core component styling for [cru.org](https://cru.org) which runs on [Adobe Experience Manager (AEM)](https://www.adobe.com/marketing/experience-manager.html). Those files can be found in `/cruorg`. Seeing how the designs for the core components were given as the examples of the desired cross-project consistent branding, it made sense to develop both in the same place.

## Disclaimer

This submodule is still in pre-production. Variables, mixins, functions, and classes may change periodically right now. Use at your own risk. Please contact John Plastow with any questions.

## How to Incorporate into Your Project

There are a couple different ways this submodule can be incorporated into a project.

1. Use one of the CSS files located in `/css` in a `<link>` element in your HTML file's `<head>` area. Inside those files you'll find lots of pre-defined classes that your web project can utilize.
2. Import the SCSS files located in `/scss` into your own SCSS project and compile everything together for a custom stylesheet.

Here's an example of the files you'll probably need for option #2:

```
@import '{local-path-to-this-projects-directory}/scss/options';
@import '{local-path-to-this-projects-directory}/scss/variables';
@import '{local-path-to-this-projects-directory}/scss/mixins';
```

*Note - If you're using option #2 and needing to export multiple stylesheets, you'll need to import the branding SCSS files into each of the SCSS files in your project that will be exported. We're doing this for the cru.org styles by importing the SCSS partial `/cruorg/_branding-imports.scss` which contains all the branding imports necessary. This allows us to maintain the branding imports from a single location and only requires a single import in each SCSS file to be exported.

## Using the SCSS Files

This is the more complex, but much more powerful, way to use this project. All the compiled CSS was originally written in SCSS (a syntax variation of the CSS preprocessing language [SASS](https://sass-lang.com/)) and have largely been sorted into sub-directories according to the type of data they contain, namely variables, mixins, and classes.

The power of the SCSS is found in the variables and mixins. If you use the variables and mixins in this project and we need to tweak something for the sake of Cru branding, your website will be automatically updated the next time you update the project in your development environment and recompile the stylesheets.

**Please use the variables and mixins! They were made for YOU!**

### Two media query strategies

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

### Setting options, overriding variables, and modifying breakpoints

While this project is designed to keep branding consistent across various projects, there are some things that need to be customizable. The following options are set to false by default, but set them to `true` as needed.

* `$cru-import-google-fonts` imports all official Cru branding fonts.
* `$cru-import-google-fonts-sans-serif-only` imports only the official Cru branding sans-serif font.
* `$cru-import-google-fonts-serif-only` imports only the official Cru branding serif font.
* `$cru-aem-media-queries` changes the output format of the media query mixins from mobile-first to AEM-style.

*Note - These options, along with the variable overrides discussed next, need to be declared **before** importing the branding SCSS files mentioned earlier.

Inside `/scss` you'll find two non-underscored files: `aem.scss` and `mobile-first.scss`. These two files get compiled into their corresponding CSS files in `/css`. Both files import the `_styles.scss` file and thus all the other files that `_styles.scss` imports itself, but `aem.scss` also imports `_aem-overrides.scss` which contains new option and variable values which will override those in `_options.scss` and `_variables.scss` respectively. This project defaults to a mobile-first responsive strategy, so we have to tell it we want AEM media queries instead. We do that by setting the variable `$cru-aem-media-queries` to `true`. AEM also uses an additional breakpoint to what's in this submodule, 992px, so we need to add it to the [map](https://sass-lang.com/documentation/values/maps) of breakpoint values that's used to create the media queries. Non-AEM projects may also find themselves needing to add or modify the breakpoints used, so this example applies to everyone.

```
Default                             AEM

$cru-breakpoints: (                 $cru-breakpoints: (
  1: 0,                               xs: 0,
  2: 768px,                           md: 768px,
  3: 1200px,                          lg: 992px,
) !default;                           xl: 1200px,
                                    );

$cru-breakpoints-mapping: (         $cru-breakpoints-mapping: (
  1: 1,                               xs: 1,
  2: 2,                               md: 2,
  3: 3,                               lg: 2,
) !default;                           xl: 3,
                                    );
```

A few things to note:
1. The `!default` flag is only needed on the default map because that's what indicates it can be overridden.
2. The first breakpoint **must** have a value of 0 for computational purposes.
3. You can label your maps' keys whatever you want as long as they're consistent between `$cru-breakpoints` and `$cru-breakpoints-mapping`.
4. This project's default styles are set for three browser sizes, essentially mobile, tablet, and desktop, so if you change the number of breakpoints or change the map keys, you need to tell it which breakpoints you want the default styles to apply to. In this example for AEM, we're telling the compiler to map the mobile styles (1) to the smallest breakpoint, the tablet styles (2) to the middle two breakpoints, and the desktop styles (3) to the largest breakpoint in  `$cru-breakpoints-mapping`.

`_aem-overrides.scss` also contains some variable overrides that pull in the updated values of the breakpoints. You'll want to create your own variable overrides if you've modified the breakpoints maps. Here are what come default with this project:

* `$cru-breakpoint-xs` equates to 0.
* `$cru-breakpoint-md` equates to 768px.
* `$cru-breakpoint-xl` equates to 1200px.

### Important Media Query Mixins

There are three important mixins that anyone using this project should be aware of. These auto-create the media queries necessary based on the breakpoints you're using and adjusts the pixel value when necessary depending on whether you're using AEM or mobile-first. Remember what I said about making yourself breakpoint variables? This is where they come in really handy.

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

## Previewing this Project

A demo page has been created to show how the styles look and react in the mobile-first responsive strategy. Currently, that file is written in PHP, so you'll need to be running a local server to view it. I recommend using [MAMP](https://www.mamp.info/) (MacOS) or [WampServer](https://www.wampserver.com/) (Windows). The page can be found at `/demo` starting at v0.4.0.

## Editing this Project

Realize that this project has the potential to impact numerous web properties, so please edit with caution. Create your own branch off of main, submit a pull request, and tag John Plastow for review/approval. This project uses [Node.js](https://nodejs.org/), [Node Package Manager](https://www.npmjs.com/), and [Gulp](https://www.npmjs.com/package/gulp). You'll first need to open a terminal to the submodule's location and run `npm install` to download all the necessary packages. Running the `gulp` command in your terminal will watch both the branding and cru.org SCSS files and automatically compile them when a file is changed. *Ctrl + C* will end the `gulp` process.

*Please note that when editing branding SCSS files, you'll need to trigger compiling the cru.org SCSS files before you'll see the changes on the cru.org demo pages. This is due to Gulp's inability to run syncronous processes while watching files (see [documentation](https://gulpjs.com/docs/en/getting-started/watching-files/#warning-avoid-synchronous)).

### Editing cru.org core component styles

If you're needing to work on cru.org core component styles, `/cruorg` contains everything you'll need. File paths in the rest of this section will be relative to `/cruorg`. Here's a breakdown of everything in that directory and how to use them:

* `/index.php` displays all the styled components once they've been uncommented from the array on lines 3-20.
* `/styles.scss` automatically pulls in and compiles the SCSS files from each component and composit.
* `/styles.css` is the compiled version of `styles.scss`.
* `/dev.scss` imports styles from `/styles.scss` and adds a little more for the demo pages' styling.
* `/dev.css` is the compiled version of `dev.scss`.
* `/_branding-imports.scss` contains the branding options, variables, and mixins needed for cru.org.
* `/components` contains individual directories for each component cru.org uses.
  * `{component}/{component}.php` is where the AEM HTML output for that component lives. Copy/paste the default HTML output from the AEM documentation found [here](https://www.aemcomponents.dev/). Though these files are meant for HTML, they're PHP so that repeating HTML output can be easily looped through.
  * `{component}/{component}.scss` is where all in-development SCSS code for that component should live until the pull request has been approved and merged. This includes new variables, mixins, functions, and style rules. The styles will then be moved out of the component and into the branding files as needed.
  * `{component}/{component}.css` is the compiled version of `{component.scss}`.

A few notes:

* Run `gulp` in your terminal to compile the SCSS.
* Edit only the files contained in `/cruorg`.
* Use the variables and mixins found in the branding files.
* If you need to add a class, place it on the outermost `<div>` of the HTML copy/pasted from the AEM documentation.
* I've created an `info` class to be used on the component PHP pages where you can write notes about any edits to the original HTML you made or special SCSS decisions. For an example of how these SCSS and PHP files work together, check out what I've already done for the title component.

## Currently Used By

* Cru's main website - [cru.org](https://cru.org) (in progress)
* Cru Store (previously known as Cru Press) - [crustore.org](https://crustore.org) (on hold)
