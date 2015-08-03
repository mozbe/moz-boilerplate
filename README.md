# Mozbe Prototyping Boilerplate

===

## TECHNOLOGIES

### Build
Node (npm) - Gulp - Browserify - Browsersync - Sourcemaps (Sass, JavaScript) - Express - Live Reload  

### Lint
JSHint - JSCS  

### Css
Sass, Susy, Autoprefixer, Clean-Css  

### JavaScript
jQuery, Velocity, lodash  

### Testing
Jasmine, Karma  

### HTML
Jade

====

## INSTALL

### Requires
[Node](http://nodejs.org)  
[Gulp](http://gulpjs.com/) may need to be installed globally with `npm install gulp -g`  

### Install dependencies
Run `npm install`

### Start server/watch/build
Run `gulp`  

### Run production build
Run `gulp prod`  

====

## TESTING

Unit tests are run by `gulp test`  
Karma configuration in 'test/karma.conf.js'  
Unit test files in 'test/unit'  

====

## HTML

HTML is utilising the [Jade](http://www.jade-lang.com) templating language. 

====

## CSS

[Sass](http://sass-lang.com/) is chosen preprocessor with [Susy](http://susy.oddbird.net/) as responsive grid "framework". [Autoprefixer](https://github.com/postcss/autoprefixer-core) via Gulp build.

====

## JavaScript

[Browserify](http://browserify.org/) is a tool for compiling node-flavored commonjs modules for the browser. [Velocity.js](http://julian.com/research/velocity/) animation engine. [jQuery](https://jquery.com/) javascript library. [lodash](https://lodash.com/) utilitity library.


====

## LINTING / CODE GUIDELINES / BEST PRACTISES

Css: SMACSS (Scalable and Modular Architecture for CSS) / [BEM](http://getbem.com/) / OOCSS  
JavaScript: Strict mode, JSHint, JSCS  

### Config files
JSHint Linting rules /.jshintrc  
JSCS rules /.jscsrc  
Editor configuration /.editorconfig  

====

## KNOWN ISSUES

**gulp-sass cannot find @import partials:**  
If using Sublime Text add `"atomic_save" : true` to the User config file.
