import login from './modules/_login';
import blogMenu from './modules/_blogMenu';
import flip from './modules/_flip';
import hamburger from './modules/_hamburger';
import parallaxMove from './modules/_parallaxMove';
import parallaxScroll from './modules/_parallaxScroll';
import preloadMain from './modules/_preloadMain';
import slider from './modules/_slider';
import submit from './modules/_submit';
import preload from './modules/_preload';
import scrollButton from './modules/_scrollButton';
import tabs from './modules/_tabs';
import uploadImg from './modules/_uploadImg';
import uploadArt from './modules/_uploadArt';
import prepareSend from './prepareSend';
import {
    aniScreen
} from './modules/_animation';


// Переменная для проверки страницы на наличие контейнеров
var main = document.getElementsByClassName('main'),
    heroParallax = document.getElementsByClassName('hero__bg'),
    blog = document.getElementsByClassName('blog'),
    works = document.getElementsByClassName('works'),
    admin = document.getElementsByClassName('admin');
// Подключаемые модули
if (heroParallax.length) {
    parallaxScroll(); //модуль параллакса от скролла мышью
    hamburger(); //Модуль меню в шапке страниц
};
if (window.matchMedia("(min-width: 1200px)").matches) {
    if (main.length) {
        parallaxMove(); // Модуль параллакса от передвижения мыши
    };
};
if (main.length) {
    flip(); //Модуль для флип-эффекта
    login(); //Модуль для валидации на главной странице
    preloadMain(); // Модуль предзагрузки для главной страницы
}
if (admin.length) {
    tabs(); //Модуль для табов
    uploadImg(); // Модуль загрузки картинок для работ
    uploadArt(); // Модуль загрузки статей для блога
}

if (!main.length && !admin.length) {
    aniScreen('fadeIn','fadeOut', 0.5);
    preload(); //Модуль прелоадеров
    scrollButton(); //Модуль перехода от клика на стрелку
};
if (blog.length) {
    blogMenu(); //Модуль для меню блога
};
if (works.length) {
    slider(); //Модуль для слайдера
    submit(); //Модуль для валидации submit`a
};