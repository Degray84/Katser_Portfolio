import {
    scroll
} from './_scrollBy';
// МОДУЛЬ ПРОКРУТКИ ЭКРАНА ПРИ НАЖАТИИ НА СТРЕЛКИ
export default function () {
    const arrowDown = document.querySelector('.hero__scroll-button'),
        arrowUp = document.querySelector('.works-about__to-top');
    // Вызываем функцию scroll при клике, прокручиваем страницу вниз на расстояние высоты экрана
    function _scrollDown() {
        if (arrowDown === null) {
            return false
        } else {
            arrowDown.addEventListener('click', function () {
                return scroll(document.documentElement.clientHeight)
            })
        }
    }
    // Вызываем функцию scroll при клике, прокручиваем страницу вверх до 0
    function _scrollUp() {
        if (arrowUp === null) {
            return false
        } else {
            arrowUp.addEventListener('click', function () {
                return scroll(0)
            })
        }
    }
    // Инициализируем обработчики в функции инициализации
    function _init() {
        _scrollDown()
        _scrollUp()
    }
    return {
        init: _init()
    }
}