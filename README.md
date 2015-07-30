# Mozbe Boiler Plate Front End

===

## TECHNOLOGIES

### Build
Node (npm) - Gulp - Browserify - Browsersync - Sourcemaps (Sass, JavaScript) - Express - Live Reload  

### Lint
JSHint - JSCS - ESLint - JSONLint  

### Css
Sass, Susy, Autoprefixer, CSS Minify (Clean-Css), UnCSS  

### JavaScript
jQuery, Velocity, lodash  

### Testing
Jasmine, Karma  

====

## CODE GUIDELINES / BEST PRACTISES

Css: SMACSS (Scalable and Modular Architecture for CSS) / [BEM](http://getbem.com/) / OOCSS  
JavaScript: Strict mode, JSHint, JSCS, ESLint  

### Config files
JSHint Linting rules /.jshintrc  
JSCS rules /.jscsrc  
Editor configuration /.editorconfig  

====

## KNOWN ISSUES

**gulp-sass cannot find @import partials:**  
If using Sublime Text add `"atomic_save" : true` to User config file.
