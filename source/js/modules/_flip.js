import {
    animate
} from './_animation';
export default function () {
    var indexCard = document.getElementsByClassName("card-flip"),
        authoriz = document.getElementsByClassName("login"),
        indexBack = document.getElementById("goBack");

    function _animateCard() {
        setTimeout(function () {
            animate(indexCard, 'fadeInX');
        }, 5000)
    };
    // При клике на кнопку "Авторизация" поворот карточки на 180 гр.
    function _authorization() {
        $(authoriz).click(function (e) {
            e.preventDefault();
            $(indexCard).css("transform", "rotateY(180deg)");
            $(this).fadeOut(1000);
        });
    };
    // При клике на кнопку "Главное меню" поворот карточки на 180 гр обратно.
    function _goBack() {
        $(indexBack).click(function (e) {
            e.preventDefault();
            $(indexCard).css("transform", "rotateY(0deg)");
            $(authoriz).fadeIn(1000);
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