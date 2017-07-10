export default function() {
    let scrollButton = document.querySelector('.hero__scroll-button');

    function _scrollDown(button) {
        button.addEventListener('click', function() {
            return _scroll()
        })
    }

    function _scroll() {
        var timeOut = setInterval(function() {
            if (window.pageYOffset > document.documentElement.clientHeight) {
                clearInterval(timeOut);
                return false;
            } else {
                window.scrollBy(0, 20);
            }
        }, 20)
    }

    function _init() {
        _scrollDown(scrollButton)
    }
    return {
        init: _init()
    }
}