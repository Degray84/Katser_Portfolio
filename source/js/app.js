import authoriz from './modules/authoriz';
import blogMenu from './modules/blog_menu';
import flip from './modules/flip';
import mainMenu from './modules/main-menu';
import parallax from './modules/parallax';
import parallaxScroll from './modules/parallaxScroll';
import main_preload from './modules/main_preload';
import slider from './modules/slider';
import submit from './modules/submit';
import preload from './modules/preload';
import scrollButton from './modules/arrow';

// Переменная для проверки страницы на наличие контейнера для параллакс
var main = document.getElementsByClassName('main'),
    heroParallax = document.getElementsByClassName('hero__bg'),
    blog = document.getElementsByClassName('blog'),
    works = document.getElementsByClassName('works');
// Подключаемые модули
if (heroParallax.length) {
    parallaxScroll(); //модуль параллакса от скролла мышью
    mainMenu(); //Модуль меню в шапке страниц
};
if (window.matchMedia("(min-width: 1200px)").matches) {
    if (main.length) {
        parallax();
        // Модуль параллакса от передвижения мыши
    };
};
if (main.length) {
    flip(); //Модуль для флип-эффекта
    authoriz(); //Модуль для валидации на главной странице
    main_preload();
}
//Модуль для прелоадеров
if (!main.length) {
    preload();
    scrollButton();
};
if (blog.length) {
    blogMenu(); //Модуль для меню блога
};
if (works.length) {
    slider(); //Модуль для слайдера
    submit(); //Модуль для валидации submit`a
};