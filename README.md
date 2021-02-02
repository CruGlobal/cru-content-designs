# Cru Branding Submodule

**LATEST VERSION: v0.2**

The purpose of this submodule is to provide consistent branding for Cru online properties, beginning with [cru.org](https://cru.org) which currently runs on [Adobe Experience Manager (AEM)](https://www.adobe.com/marketing/experience-manager.html). However, this submodule also provides stylesheets and SCSS tools that can be imported and used by other systems (e.g., [WordPress](https://wordpress.org)).

## Disclaimer

This submodule is still in its infantcy. Variables, mixins, functions, and classes will continue to change regularly right now. A very basic versioning system is in place using separate version directories. Use at your own risk. Please contact John Plastow with any questions.

## How to Incorporate into Your Project

There are a couple different ways this submodule can be incorporated into a project.

1. Use the CSS files located in `{version-directory}/css` in the `<link>` element in your HTML file's `<head>` section. Inside those files you'll find lots of pre-defined classes that your web project can utilize.
2. Import the SCSS files located in `{version-directory}/scss` into your own SCSS project and compile everything together for a custom stylesheet.

## Using the SCSS Files

This is the more complex, but much more powerful, way to use this submodule. All the compiled CSS is originally written in SCSS (a syntax variation of the CSS preprocessing language [SASS](https://sass-lang.com/)), broken out according to [AEM's core components](https://www.aemcomponents.dev/). The files have also largely been sorted into sub-directories according to the type of data they contain, namely variables, mixins, and classes. There is also a contractors sub-directory that will be explained [further down](#contractors) in this document.

### Strategy for supporting multiple platforms

The primary way that this submodule supports multiple platforms comes down to how it handles media queries for responsive styling. Much of the web development world uses a mobile-first approach, writing CSS for mobile browser sizes first and then working their way up. Style rules not defined in any media query will apply to the smallest browser size. As the browser gets bigger, only `min-width` media queries will be needed where the defined breakpoint is the first time you see that style rule set until you expand your browser enough to get to the next breakpoint.

AEM, on the other hand, uses more of a desktop-first approach to its responsive CSS. This means that AEM's default style rules (no media query) will be used for the largest browser size. The smallest defined breakpoint will be used in a `max-width` media query to target the smallest browser size. In-between browser sizes will use a media query utilizing both `min-width` and `max-with` of adjacent breakpoints but without any overlap.

It's important to note that if your browser is going from small to large, when you hit breakpoints that are part of a `max-width` media query, the styles are going to change as soon as your brower grows one pixel larger. `max-width` targets browser sizes of the given breakpoint and smaller whereas `min-width` targets browser sizes of the given breakpoint and larger.

Here's a comparison of the two responsive strategies using the default breakpoints used in this submodule: 768px and 1200px. We're going to set three different background colors to `body` (red, green, and blue) ordered from smallest browser to largest.

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

### Variable overrides and modifying breakpoints

Inside `{version-directory}/scss` you'll find two non-underscored files: `aem.scss` and `mobile-first.scss`. These two files get compiled into their corresponding CSS files in `{version-directory}/css`. Both files import the `_styles.scss` file and thus all the other files that `_styles.scss` imports itself, but `aem.scss` contains some variable overrides as well. The submodule defaults to a mobile-first responsive strategy, so we have to tell it we want AEM media queries instead. We do that by setting the variable `$cru-aem-media-queries` to `true`. AEM also uses an additional breakpoint to what's in this submodule, 992px, so we need to add it to the [variable map](https://sass-lang.com/documentation/values/maps) that's used to create the media queries. Non-AEM projects may also find themselves needing to add or modify the breakpoints used, so this example applies to everyone.

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
1. The `!default` flag is only needed on the default map because that's what indicates it's available for override.
2. The first breakpoint **must** have a value of 0 for computational purposes.
3. You can label your maps' keys whatever you want as long as they're consistent between the two maps.
4. The submodule's default styles are set for three browser sizes, essentially mobile, tablet, and desktop, so if you change the number of breakpoints or change the map keys, you need to tell it at what breakpoints you want the default styles to apply to. In the `$cru-breakpoints-mapping` map, we're telling the compiler to map the smallest styles (1) to the smallest breakpoint, the medium styles (2) to the middle two breakpoints, and the largest styles (3) to the largest breakpoint.

You might notice that there are also some variable overrides in `aem.scss` that pull in the updated values of the breakpoints. You'll want to create your own variables if you've modified the breakpoints maps. Here are what come default with the submodule:

```
$cru-breakpoint-xs: // equates to 0
$cru-breakpoint-md: // equates to 768px
$cru-breakpoint-xl: // equates to 1200px
```

### Importing the SCSS

If you're looking at this section of the documentation, that probably means you just need the SCSS variables and mixins rather than all the compiled CSS classes. Here's what you need:

```
@import '{local-path-to-submodule-directory}/{version-directory}/scss/variables';
@import '{local-path-to-submodule-directory}/{version-directory}/scss/mixins';
```

If you're overriding any variables or modifying the breakpoints, you must do that **before** you import these two files. Notice how `aem.scss` did all its magic before it imported `styles`.

### Important Media Query Mixins

There are three important mixins that anyone using this submodule to be aware of. These auto-create the media queries necessary based on the breakpoints you're using and adjusts for whether you're using AEM or mobile-first. Remember what we said about making yourself breakpoint variables? This is where they come in really handy.

* `cru-media-breakpoint-down($var)` runs a `max-width` query, targeting everything at or below the variable given.
* `cru-media-breakpoint-between($var1, $var2)` runs a `min-width` and `max-width` query, targeting everything between the variables given.
* `cru-media-breakpoint-up($var)` runs a `min-width` query, targeting everything at or above the variable given.

Here's an example using that same background-color demo from above.

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

## Previewing this Submodule

Demo files have been created to show how the styles look and react to both the mobile-first and AEM responsive strategies. Currently, those files are written in PHP, so you'll need to be running a local server to view them. I recommend using [MAMP](https://www.mamp.info/).

## Editing this Submodule

Please realize that this submodule has the potential to impact numerous web properties, so please edit with caution. Create your own branch, submit a pull request, and tag John Plastow for review/approval. This project uses [Node.js](https://nodejs.org/), [Node Package Manager](https://www.npmjs.com/), and [Gulp](https://www.npmjs.com/package/gulp). You'll first need to open a terminal to the submodule's location and run `npm install` to download all the necessary packages. Then run `gulp buildCruBranding` to recompile the stylesheets whenever a change is made.

### Contractors

We appreciate your help! At this time, individual SCSS files have been created for our contractors to use in `{version-directory}/scss/contractors/{first-name}.scss`. Please put everything you need (variables, mixins, functions, etc.) in this one file and it'll be separated out into its proper place in the larger submodule after approval. Similarly, there are PHP files for you to add HTML to the demo files located at `demo/contractors/{first-name}.php`.

## Currently Used By

1. Cru's main website - [cru.org](https://cru.org)
2. Cru Store (previously known as Cru Press) - [crustore.org](https://crustore.org)
