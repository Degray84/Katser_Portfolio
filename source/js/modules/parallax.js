export default function() {
    var parallaxCont = document.getElementById('main__parallax'),
        layers = parallaxCont.children;

    function _moveLayers(e) {

        var initialX = (window.innerWidth / 2) - e.pageX,
            initialY = (window.innerHeight / 2) - e.pageY;
        [].slice.call(layers).forEach(function(layer, index) {
            var devider = index / 125,
                positionX = initialX * devider,
                positionY = initialY * devider,
                bottomPosition = (window.innerHeight / 2) * devider,
                transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
                image = layer.firstElementChild;
            layer.style.transform = transformString;
            // image.style.bottom = '-' + bottomPosition + 'px';
        });
    };

    function _mouseMoveListener() {

        window.addEventListener('mousemove', _moveLayers);

    }

    return {
        init: _mouseMoveListener()
    };

};