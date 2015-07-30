'use strict';

// Make jQuery available globally
window.$ = window.jQuery = require('jquery');

// Require Velocity.js with UI Pack
require('velocity-animate');
require('velocity-animate/velocity.ui');

// Require a module or two
var colourMeIn = require('./modules/colour');

(function(){

    //Let's try it out:
    colourMeIn('pink');

    // some velocity in action:
    $("body").velocity({
        opacity: 0.5,
        backgroundColor: '#DCDCDC'
    }, 800).velocity({
        opacity: 1,
        backgroundColor: '#FFE4E1'
    }, 400);

})();
