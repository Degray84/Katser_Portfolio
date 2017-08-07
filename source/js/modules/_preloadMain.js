import {
    animate
} from './_animation';
// МОДУЛЬ ЗАГРУЗЧИКА ИЗОБРАЖЕНИЙ ДЛЯ ГЛАВНОЙ СТРАНИЦЫ
export default function () {
    // Загрузка массива изображений для параллакс-эффекта
    const url = [
        [
            "../assets/img/parallax(laptop-1575)/Layer(000).png",
            "../assets/img/parallax(laptop-1575)/Layer(001).png",
            "../assets/img/parallax(laptop-1575)/Layer(002).png",
            "../assets/img/parallax(laptop-1575)/Layer(003).png",
            "../assets/img/parallax(laptop-1575)/Layer(004).png",
            "../assets/img/parallax(laptop-1575)/Layer(005).png",
            "../assets/img/parallax(laptop-1575)/Layer(006).png",
            "../assets/img/parallax(laptop-1575)/Layer(007).png",
            "../assets/img/parallax(laptop-1575)/Layer(008).png",
            "../assets/img/parallax(laptop-1575)/Layer(009).png"
        ],
        [
            "../assets/img/parallax(desktop-2100)/Layer(000).png",
            "../assets/img/parallax(desktop-2100)/Layer(001).png",
            "../assets/img/parallax(desktop-2100)/Layer(002).png",
            "../assets/img/parallax(desktop-2100)/Layer(003).png",
            "../assets/img/parallax(desktop-2100)/Layer(004).png",
            "../assets/img/parallax(desktop-2100)/Layer(005).png",
            "../assets/img/parallax(desktop-2100)/Layer(006).png",
            "../assets/img/parallax(desktop-2100)/Layer(007).png",
            "../assets/img/parallax(desktop-2100)/Layer(008).png",
            "../assets/img/parallax(desktop-2100)/Layer(009).png"
        ],
        [
            "../assets/img/parallax(2x)/Layer(000).png",
            "../assets/img/parallax(2x)/Layer(001).png",
            "../assets/img/parallax(2x)/Layer(002).png",
            "../assets/img/parallax(2x)/Layer(003).png",
            "../assets/img/parallax(2x)/Layer(004).png",
            "../assets/img/parallax(2x)/Layer(005).png",
            "../assets/img/parallax(2x)/Layer(006).png",
            "../assets/img/parallax(2x)/Layer(007).png",
            "../assets/img/parallax(2x)/Layer(008).png",
            "../assets/img/parallax(2x)/Layer(009).png"
        ]
    ];
    // Статичные изображения для телефонов и планшетов
    const urlPhones = "../assets/img/bg/mountains-phones.jpg",
        urlTablets = "../assets/img/bg/mountains-tablets.jpg",
        // Классы для медиазапросов 
        classLaptop = "parallax__image parallax_laptop",
        classDesktop = "parallax__image parallax_desktop",
        classRetina = "parallax__image parallax_retina",
        classTablets = "parallax__scroll parallax_tablets",
        classPhones = "parallax__scroll parallax_phones",
        classLayer = "parallax__layer",
        // Блоки для анимации
        indexCard = document.querySelector(".card-flip"),
        authoriz = document.querySelector(".login"),
        // Блоки для загрузчика
        preloader = document.querySelector('.preloader'),
        percents = document.querySelector('.preloader__percent');
    // Счетчик для посчета загруженных изображений
    let tot,
        cur = 0;
    // Инициализация анимаций, 
    // первый аргумента - блок для анимации, 
    // второй аргумент - анимация из animate.css
    function _animation() {
        animate(indexCard, 'flipInX');
        animate(authoriz, 'lightSpeedIn');
    };
    // Функция создает изображение и увеличивает счетчик cur на единицу
    function loadImage(url, classPar) {
        return new Promise(function (resolve, reject) {
            var image = new Image(),
                layer = document.createElement('div');
                document.querySelector('.parallax').appendChild(layer).appendChild(image);
            image.src = url;
            image.className = classPar;
            layer.className = classLayer;
            image.addEventListener('load', function () {
                resolve();
                _setPercent(tot, cur);
                cur++;
            });
            image.addEventListener('error', function () {
                reject();
            });
        });
    }
    // Функция устанавливает процент внутри загрузчика, если процентов больше или равно 100, скрывает загрузчик
    function _setPercent(total, current) {
        let perc = Math.ceil(current / total * 100);
        percents.innerHTML = `${perc}%`;
        if (perc >= 100) {
            preloader.style.display = "none";
        }
    }
    // Функция загружает изображения в зависимости от ширины экрана
    // Не дает загружаться ненужным изображениям
    function _loadAdaptitve() {
        // Изображения для телефона и планшета
        if (window.matchMedia("(max-width: 1199px)").matches) {
            tot = 1;
            loadImage(urlPhones, classPhones)
                .then(function () {
                    return loadImage(urlTablets, classTablets)
                })
                .then(function () {
                    return _animation()
                });
        }
        // Изображения для ноутбука
        if ((window.matchMedia("(max-width: 1399px)").matches) && (window.matchMedia("(min-width: 1200px)").matches)) {
            tot = 8;
            loadImage(url[0][0], classLaptop)
                .then(function () {
                    return loadImage(url[0][1], classLaptop)
                })
                .then(function () {
                    return loadImage(url[0][2], classLaptop)
                })
                .then(function () {
                    return loadImage(url[0][3], classLaptop)
                })
                .then(function () {
                    return loadImage(url[0][4], classLaptop)
                })
                .then(function () {
                    return loadImage(url[0][5], classLaptop)
                })
                .then(function () {
                    return loadImage(url[0][6], classLaptop)
                })
                .then(function () {
                    return loadImage(url[0][7], classLaptop)
                })
                .then(function () {
                    return loadImage(url[0][8], classLaptop)
                })
                .then(function () {
                    return _animation()
                });
        }
        // Изображения для настольного компьютера
        if ((window.matchMedia("(max-width: 1959px)").matches) && (window.matchMedia("(min-width: 1400px)").matches)) {
            tot = 8;
            loadImage(url[1][0], classDesktop)
                .then(function () {
                    return loadImage(url[1][1], classDesktop)
                })
                .then(function () {
                    return loadImage(url[1][2], classDesktop)
                })
                .then(function () {
                    return loadImage(url[1][3], classDesktop)
                })
                .then(function () {
                    return loadImage(url[1][4], classDesktop)
                })
                .then(function () {
                    return loadImage(url[1][5], classDesktop)
                })
                .then(function () {
                    return loadImage(url[1][6], classDesktop)
                })
                .then(function () {
                    return loadImage(url[1][7], classDesktop)
                })
                .then(function () {
                    return loadImage(url[1][8], classDesktop)
                })
                .then(function () {
                    return _animation()
                });
        }
        // Изображения для высоких разрешений
        if (window.matchMedia("(min-width: 1960px)").matches) {
            tot = 8;
            loadImage(url[2][0], classRetina)
                .then(function () {
                    return loadImage(url[2][1], classRetina)
                })
                .then(function () {
                    return loadImage(url[2][2], classRetina)
                })
                .then(function () {
                    return loadImage(url[2][3], classRetina)
                })
                .then(function () {
                    return loadImage(url[2][4], classRetina)
                })
                .then(function () {
                    return loadImage(url[2][5], classRetina)
                })
                .then(function () {
                    return loadImage(url[2][6], classRetina)
                })
                .then(function () {
                    return loadImage(url[2][7], classRetina)
                })
                .then(function () {
                    return loadImage(url[2][8], classRetina)
                })
                .then(function () {
                    return _animation()
                });
        }
    }
    return {
        // Публичный метод инициализации
        init: _loadAdaptitve()
    };
};