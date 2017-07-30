// МОДУЛЬ PARALLAX-ЭФФЕКТА ПРИ СКРОЛЛЕ
export default function () {
    // Модуль переменщения блока изображения
    // block - блок изображения
    // windowScroll - величина прокрутки
    // strafeAmount - чувствительность смещения блока изображения
    function _moveY(block, windowScroll, strafeAmount) {
        // Величина смещение бока изображения
        const strafe = windowScroll / -strafeAmount + '%';
        // Команда смещения блока изображения
        const transformString = 'translate3d(0,' + strafe + ',0)';
        // Смещение блока изображения
        block.style.top = strafe;
        block.style.transform = transformString;
        block.style.webkitTransform = transformString;
    };
    // Модуль перемещения изображения hero_bg
    function _scrollmove() {
        const bg = document.querySelector('.hero__bg');
        let wScroll = window.pageYOffset;
        _moveY(bg, wScroll, 75);
    }
    // Инициализация прослушки скролла
    function _init() {
        window.addEventListener("scroll", _scrollmove)
    }
    return {
        init: _init()
    }

};