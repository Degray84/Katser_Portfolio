import {
    animate
} from './_animation';
// МОДУЛЬ FLIP АНИМАЦИИ КАРТОЧКИ ГЛАВНОЙ СТРАНИЦЫ
export default function () {
    // Определение постоянных переменных
    const indexCard = document.querySelector(".card-flip"),
        authoriz = document.querySelector(".login"),
        indexBack = document.querySelector("#goBack");
    // При клике на кнопку "Авторизация" поворот карточки на 180 гр.
    function _authorization() {
        authoriz.addEventListener('click', (e) => {
            e.preventDefault();
            indexCard.style = 'transform: rotateY(180deg)';
            animate(authoriz, 'fadeOut');
            setTimeout(() => {
                authoriz.style = 'display: none';
            }, 1000)
        });
    };
    // При клике на кнопку "Главное меню" поворот карточки на 180 гр обратно.
    function _goBack() {
        indexBack.addEventListener('click', (e) => {
            e.preventDefault();
            indexCard.style = 'transform: rotateY(0deg)';
            authoriz.style = 'display: block';
            animate(authoriz, 'fadeIn');
        });
    };

    function _init() {
        _authorization();
        _goBack();
    }
    return {
        init: _init()
    }
};