# Mozbe Front End Boilerplate

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

### Install dependencies
Run `npm install`

### Start server/watch/build
Run `gulp`  
[Gulp](http://gulpjs.com/) may need to be installed globally with `npm install gulp -g`  

====

## TESTING

Unit tests are run by `gulp test`  
Karma configuration in 'test/karma.conf.js'  
Test files in 'test/unit'  

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
