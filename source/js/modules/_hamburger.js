import {
    animate,
    animateList
} from './_animation';
export default function () {
    let icon = document.querySelector('.hamburger-icon'),
        menu = document.querySelector('.hero__hideMenu'),
        menuItems = document.querySelectorAll('.hideMenu-nav__item'),
        bgLeft = menu.querySelector('.hero__menuBg_left'),
        bgRight = menu.querySelector('.hero__menuBg_right');
    //  При клике на иконку  делает активным меню и иконку, при втором клике убирает активный класс
    function _setUpListeners() {
        icon.addEventListener('click', function (ev) {
            ev.preventDefault();
            menu.classList.toggle('active');
            icon.classList.toggle('hamburger-icon_active');
            animate(bgLeft, 'slideInLeft');
            animate(bgRight, 'slideInRight');
            menuItems.forEach(function (element) {
                element.style.display = 'none';
            });
            setTimeout(() => {
                animateList(menuItems, 'rubberBand', 200);
            }, 1000);
        })
    }

    function _init() {
        _setUpListeners()
    }
    return {
        init: _init()
    }
};