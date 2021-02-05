# Cru Branding Submodule

**LATEST VERSION: v0.3**

The purpose of this repository is firstly to provide consistent branding for Cru's online properties. It's designed to be included in other git repositories as a submodule. Web projects can utilize the classes found in the CSS files "out of the box" or import the SCSS files into their own project's SCSS files and compile everything together for a custom stylesheet.

Secondly, this submodule serves as a development area for the core component styling for [cru.org](https://cru.org) which runs on [Adobe Experience Manager (AEM)](https://www.adobe.com/marketing/experience-manager.html). Those files can be found in `/{version-directory}/cruorg`. Seeing how the designs for the core components were given as the examples of the desired cross-project consistent branding, it made sense to develop both in the same place.

## Disclaimer

This submodule is still in its infantcy. Variables, mixins, functions, and classes will continue to change periodically right now. Use at your own risk. Please contact John Plastow with any questions.

## Versioning

The criteria for what amount of changes necessitate a bump in version number are still being ironed out as is how to keep all versions available. Currently, we're using a simple directory system with a separate directory for each version.

## How to Incorporate into Your Project

There are a couple different ways this submodule can be incorporated into a project.

1. Use one of the CSS files located in `/{version-directory}/css` in a `<link>` element in your HTML file's `<head>` area. Inside those files you'll find lots of pre-defined classes that your web project can utilize.
2. Import the SCSS files located in `/{version-directory}/scss` into your own SCSS project and compile everything together for a custom stylesheet.

Here's an example of the files you'll probably need for option #2:

```
@import '{local-path-to-submodule-directory}/{version-directory}/scss/options';
@import '{local-path-to-submodule-directory}/{version-directory}/scss/variables';
@import '{local-path-to-submodule-directory}/{version-directory}/scss/mixins';
```

*Note - If you're using option #2 and needing to export multiple stylesheets, you'll need to import the branding SCSS files into each of the SCSS files in your project that will be exported. We're doing this for the cru.org styles by importing the SCSS partial `/{version-directory}/cruorg/_branding-imports.scss` which contains all the branding imports necessary. This allows us to maintain the branding imports from a single location and only requires a single import in each SCSS file to be exported.

## Using the SCSS Files

This is the more complex, but much more powerful, way to use this submodule. All the compiled CSS was originally written in SCSS (a syntax variation of the CSS preprocessing language [SASS](https://sass-lang.com/)) and have largely been sorted into sub-directories according to the type of data they contain, namely variables, mixins, and classes.

The power of the SCSS is found in the variables and mixins. If you use the variables and mixins in this submodule and we need to tweak something for the sake of Cru branding, your website will be automatically updated the next time you update the submodule in your development environment and recompile the stylesheets.

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


While this submodule is designed to keep branding consistent across various projects, there are some things that need to be customizable. The following options are set to false by default, but set them to `true` as needed.

* `$cru-import-google-fonts` imports all official Cru branding fonts.
* `$cru-import-google-fonts-sans-serif-only` imports only the official Cru branding sans-serif font.
* `$cru-import-google-fonts-serif-only` imports only the official Cru branding  serif font.
* `$cru-aem-media-queries` changes the output format of the media query mixins to AEM-style rather than mobile-first.

*Note - These options, along with the variable overrides discussed next, need to be declared **before** importing the branding SCSS files mentioned earlier.



Inside `/{version-directory}/scss` you'll find two non-underscored files: `aem.scss` and `mobile-first.scss`. These two files get compiled into their corresponding CSS files in `/{version-directory}/css`. Both files import the `_styles.scss` file and thus all the other files that `_styles.scss` imports itself, but `aem.scss` also imports `_aem-overrides.scss` which contains new option and variable values which will override those in `_options.scss` and `_variables.scss` respectively. The submodule defaults to a mobile-first responsive strategy, so we have to tell it we want AEM media queries instead. We do that by setting the variable `$cru-aem-media-queries` to `true`. AEM also uses an additional breakpoint to what's in this submodule, 992px, so we need to add it to the [map](https://sass-lang.com/documentation/values/maps) of breakpoint values that's used to create the media queries. Non-AEM projects may also find themselves needing to add or modify the breakpoints used, so this example applies to everyone.

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
4. The submodule's default styles are set for three browser sizes, essentially mobile, tablet, and desktop, so if you change the number of breakpoints or change the map keys, you need to tell it which breakpoints you want the default styles to apply to. In this example, we're telling the compiler to map the mobile styles (1) to the smallest breakpoint, the tablet styles (2) to the middle two breakpoints, and the desktop styles (3) to the largest breakpoint in  `$cru-breakpoints-mapping`.

`_aem-overrides.scss` also contains some variable overrides that pull in the updated values of the breakpoints. You'll want to create your own variable overrides if you've modified the breakpoints maps. Here are what come default with the submodule:

* `$cru-breakpoint-xs` equates to 0.
* `$cru-breakpoint-md` equates to 768px.
* `$cru-breakpoint-xl` equates to 1200px.

### Important Media Query Mixins

There are three important mixins that anyone using this submodule to be aware of. These auto-create the media queries necessary based on the breakpoints you're using and adjusts the pixel value when necessary depending on whether you're using AEM or mobile-first. Remember what I said about making yourself breakpoint variables? This is where they come in really handy.

* `cru-media-breakpoint-down($var)` runs a `max-width` query, targeting everything at or below the variable given.
* `cru-media-breakpoint-between($var1, $var2)` runs a `min-width` and `max-width` query, targeting everything between the variables given.
* `cru-media-breakpoint-up($var)` runs a `min-width` query, targeting everything at or above the variable given.

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

*The mixins look like more work than regular media queries. Do I have to use them?* No, but the mixins help ensure consistency in how the queries are written, easability of changing breakpoint values, and automatically make adjustments to the breakpoint values when a +/- 1px is needed, so their use is encouraged.

## Previewing this Submodule

A demo page has been created to show how the styles look and react in the mobile-first responsive strategy. Currently, that file is written in PHP, so you'll need to be running a local server to view it. I recommend using [MAMP](https://www.mamp.info/). The page can be found at `/{version-directory}/demo` starting at v0.3.

## Editing this Submodule

Please realize that this submodule has the potential to impact numerous web properties, so please edit with caution. Create your own branch off of main, submit a pull request, and tag John Plastow for review/approval. This project uses [Node.js](https://nodejs.org/), [Node Package Manager](https://www.npmjs.com/), and [Gulp](https://www.npmjs.com/package/gulp). You'll first need to open a terminal to the submodule's location and run `npm install` to download all the necessary packages. Then there are three commands you can run depending on what SCSS you're needing to compile:

* `gulp` compiles everything from both sections of the submodule (recommended).
* `gulp buildBranding` compiles only the styles for Cru branding.
* `gulp buildCruorg` compiles only the styles for Cru.org core components.
* *Ctrl + C* will end the gulp process.

### Editing cru.org core component styles


`/{version-directory}/cruorg` is where the magic happens and file paths in the rest of this section will be relative to it. Here's a breakdown of everything in that directory and how to use them:

* `/index.php` displays all the styled components once they've been uncommented from the array on lines 55-72.
* `/styles.scss` automatically pulls in and compiles the SCSS files from each component and composit.
* `/styles.css` is the compiled version of `styles.scss`.
* `/_branding-imports.scss` contains the branding options, variables, and mixins needed for cru.org.
* `/components` contains individual directories for each component cru.org uses.
  * `{component}/{component}.php` is where the AEM HTML output for that component lives. Copy/paste the default HTML output from the AEM documentation found [here](https://www.aemcomponents.dev/). Though these files are meant for HTML, they're PHP so that repeating HTML output can be easily looped through.
  * `{component}/{component}.scss` is where all in-development SCSS code for that component should live until the pull request has been approved and merged. This includes new variables, mixins, functions, and style rules. The styles will then be moved out of the component and into the branding files as needed.
  * `{component}/{component}.css` is the compiled version of `{component.scss}`.

A few notes:

* Run either `gulp` or `gulp buildCruorg` to compile the SCSS.
* Edit only the files contained in `/{version-directory}/cruorg`.
* Use the variables and mixins found in the branding files.
* If you need to add a class, place it on the outermost `<div>` of the HTML copy/pasted from the documentation.
* I've created an `info` class to be used on the component PHP pages where you can write notes about any edits to the original HTML you made or special SCSS decisions. For an example of how these SCSS and PHP files work together, check out what I've already done for the title component. Remember to uncomment the title component from the array in order to preview it in the browser.

## Currently Used By

* Cru's main website - [cru.org](https://cru.org)
* Cru Store (previously known as Cru Press) - [crustore.org](https://crustore.org)
