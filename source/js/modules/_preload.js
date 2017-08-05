// МОДУЛЬ ПРЕДЗАГРУЗКИ
export default function () {
    let percentsTotal = 0; // Общее количество процентов
    const preloader = $('.preloader'); // Контейнер прелоадера
    // Функция-сборщик, обходит все элементы DOM с поиском
    // изображений присваивает их массиву imgPaths
    const imgPaths = $('*').map((ndx, element) => {
        // Присваивает переменной элемент с изображением
        const isImg = $(element).is('img');
        // Присваивает переменной элемент с css изображением
        const background = $(element).css('background-image');
        let path = ''; // Переменная пути
        // Если элемент имеет css изображение, скопировать его путь в path
        if (background != 'none') {
            path = background.replace('url("', '').replace('")', '');
        }
        // Если элемент - это изображение, скопировать его путь в path
        if (isImg) {
            path = $(element).attr('src');
        }
        // Если найден путь, то функция его возращает в массив imgPaths
        if (path) return path;
    });
    // Функция подсчета процентов
    const setPercents = (total, current) => {
        // Вычисение количества процентов с округлением вверх
        const percents = Math.ceil(current / total * 100);
        // Обновление текста загрузчика
        $('.preloader__percent').text(`${percents}%`);
        // Выключить загрузчик, если процентов больше или равно 100
        if (percents >= 100) preloader.fadeOut();
    }
    // Функция иммитации загрузки изображений
    const loadImages = (images) => {
        if (!images.length) return;
        // Обход массива изображений
        images.forEach((img, i, images) => {
            // Создает для каждого изображения <img> с атрибутом src
            const fakeImg = $('<img>', {
                attr: {
                    src: img
                }
            });
            // При загрузке каждого изображения увеличивать процент и 
            // запускать функцию подсчета процентов
            fakeImg.on('load error', () => {
                percentsTotal++;
                setPercents(images.length, percentsTotal);
            });
        })
    }
    const imgs = imgPaths.toArray();
    return {
        init: loadImages(imgs)
    }
};