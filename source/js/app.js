(function() {
    'use strict';
    var indexCard = document.getElementsByClassName("card-flip"),
        authoriz = document.getElementsByClassName("login"),
        indexBack = document.getElementsByClassName("card-login-nav__link")
    $(authoriz).click(function(e) {
        e.preventDefault();
        $(indexCard).css("transform", "rotateY(180deg)");
        $(this).fadeOut(1000);
    });
    $(indexBack).click(function(e) {
        e.preventDefault();
        $(indexCard).css("transform", "rotateY(0deg)");
        $(authoriz).fadeIn(1000);
    });
})();
var parallaxY = (function() {
    var bg = document.querySelector('.hero__bg');
    var container = document.querySelector('.hero__container');
    return {
        move: function(block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var style = block.style;
            var transformString = 'translate3d(0,' + strafe + ',0)';

            style.top = strafe;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init: function(wScroll) {
            this.move(bg, wScroll, 45);
            // this.move(container, wScroll, 20);
        }
    }
}());

window.onscroll = function() {
    var wScroll = window.pageYOffset;
    parallaxY.init(wScroll);
}

var bg = document.querySelector('.main__bg');

var moveBg = function(e) {
    var initialX = (window.innerWidth / 2) - e.pageX,
        initialY = (window.innerHeight / 2) - e.pageY,

        transformString = 'translate(' + initialX / 100 + '%,' + initialY / 100 + '%)';
    if (window.matchMedia('(min-width: 1200px)').matches) {
        bg.style.transform = transformString;
    };
};
window.addEventListener('mousemove', moveBg);