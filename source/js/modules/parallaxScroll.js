module.exports = (function() {
    var bg = document.querySelector('.hero__bg'),
        container = document.querySelector('.hero__container');

    function _moveY(block, windowScroll, strafeAmount) {
        var strafe = windowScroll / -strafeAmount + '%';
        var style = block.style;
        var transformString = 'translate3d(0,' + strafe + ',0)';

        style.top = strafe;

        style.transform = transformString;
        style.webkitTransform = transformString;
    }
    return {
        init: function(wScroll) {
            _moveY(bg, wScroll, 75);
        }
    }
}());