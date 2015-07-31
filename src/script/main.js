'use strict';

// Make jQuery available globally
window.$ = window.jQuery = require('jquery');

// Require Velocity.js with UI Pack
require('velocity-animate');
require('velocity-animate/velocity.ui');

// Require a module or two
var colour = require('./modules/bodyColour');

(function(){

    //Let's try it out:
    $("body").css('backgroundColor', colour);

    // some velocity in action:
    $("body").velocity({
        opacity: 0.5,
        backgroundColor: '#DCDCDC'
    }, {
        duration: 8000,
        loop: 2
    }).velocity({
        opacity: 1,
        backgroundColor: '#FFE4E1'
    }, {
        loop: 5,
        duration: 200
    });

})();
