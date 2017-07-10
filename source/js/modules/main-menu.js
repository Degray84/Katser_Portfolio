export default function() {
    let icon = document.querySelector('.hamburger-icon'),
        menu = document.querySelector('.hero__hideMenu'),
        menuItem = document.querySelectorAll('.hero__hideMenu');

    function _setUpListeners() {
        icon.addEventListener('click', function(ev) {
            ev.preventDefault();
            menu.classList.toggle('active');
            icon.classList.toggle('hamburger-icon_active');
        })
    }

    function _init() {
        _setUpListeners()
    }
    return {
        init: _init()
    }
};