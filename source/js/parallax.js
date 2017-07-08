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
            this.move(bg, wScroll, 75);
        }
    }
}());

window.onscroll = function() {
    var wScroll = window.pageYOffset;
    parallaxY.init(wScroll);
}

var parallaxCont = document.getElementById('main__parallax');

if (window.matchMedia("(min-width: 1200px)").matches) {
    if (parallaxCont) {
        var layers = parallaxCont.children;
        var moveLayers = function(e) {
            var initialX = (window.innerWidth / 2) - e.pageX,
                initialY = (window.innerHeight / 2) - e.pageY;
            [].slice.call(layers).forEach(function(layer, index) {
                var devider = index / 100,
                    positionX = initialX * devider,
                    positionY = initialY * devider,
                    bottomPosition = (window.innerHeight / 2) * devider,
                    transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
                    image = layer.firstElementChild;
                layer.style.transform = transformString;
                image.style.bottom = '-' + bottomPosition + 'px';
            });
        };
        window.addEventListener('mousemove', moveLayers);
    }
};