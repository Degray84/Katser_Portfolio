var parallaxY = require('./modules/parallaxScroll');
var parallax = require('./modules/parallax');
var flip = require('./modules/flip');


window.onscroll = function() {
    var wScroll = window.pageYOffset;
    parallaxY.init(wScroll);
}