export default function() {
    function _moveY(block, windowScroll, strafeAmount) {
        var strafe = windowScroll / -strafeAmount + '%';
        var style = block.style;
        var transformString = 'translate3d(0,' + strafe + ',0)';
        style.top = strafe;
        style.transform = transformString;
        style.webkitTransform = transformString;
    };

    function _scrollmove() {
        var bg = document.querySelector('.hero__bg');
        var wScroll = window.pageYOffset;
        _moveY(bg, wScroll, 75);
    }

    function _init() {
        window.addEventListener("scroll", _scrollmove)
    }
    return {
        init: _init()
    }

};