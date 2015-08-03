'use strict';

// Require Velocity.js with optional UI Pack
require('velocity-animate');
require('velocity-animate/velocity.ui');

var colour = require('./bodyColour');

var init = (function($) {

    $("body")
        .css('backgroundColor', colour)
        // some velocity in action:
        .velocity({
            opacity: 0.5,
            backgroundColor: '#DCDCDC'
        }, {
            duration: 1000,
            loop: 2
        }).velocity({
            opacity: 1,
            backgroundColor: '#FFE4E1'
        }, {
            duration: 200,
            loop: 5

        });

})(jQuery);

module.exports = init;
