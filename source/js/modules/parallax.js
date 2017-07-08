module.exports = (function() {
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
})();