// Переменная для проверки страницы на наличие контейнера для параллакс
var main = document.getElementsByClassName('main'),
    heroParallax = document.getElementsByClassName('hero__bg'),
    blog = document.getElementsByClassName('blog'),
    works = document.getElementsByClassName('works');
// Подключаемые модули
if (heroParallax) {
    var parallaxY = require('./modules/parallaxScroll'); //модуль параллакса от скролла мышью
    var main_menu = require('./modules/main-menu'); //Модуль меню в шапке страниц
};
if ((window.matchMedia("(min-width: 1200px)").matches) && (main)) {
    var parallax = require('./modules/parallax'); //Модуль параллакса от передвижения мыши
};
if (main) {
    var flip = require('./modules/flip'); //Модуль для флип-эффекта
    var authoriz = require('./modules/authoriz'); //Модуль для валидации на главной странице

};
if (blog) {
    var blog_menu = require('./modules/blog_menu'); //Модуль для меню блога
};
if (works) {
    var slider = require('./modules/slider'); //Модуль для слайдера
    var submit = require('./modules/submit'); //Модуль для валидации submit`a
};
var preload = require('./modules/preload'); //Модуль для прелоадеров