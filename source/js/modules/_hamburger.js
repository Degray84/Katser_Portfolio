import {
    animate,
    animateList
} from './_animation';
// МОДУЛЬ МЕНЮ-ГАМБУРГЕРА
export default function () {
    // Определение постоянных переменных
    const icon = document.querySelector('.hamburger-icon'),
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
            animate(bgLeft, 'slideInLeft', 0.3);
            animate(bgRight, 'slideInRight', 0.3);
            menuItems.forEach(function (element) {
                element.style.display = 'none';
            });
            setTimeout(() => {
                animateList(menuItems, 'rubberBand', 0.8);
            }, 500);
        })
    }

    function _init() {
        _setUpListeners()
    }
    return {
        init: _init()
    }
};