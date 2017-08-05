// МОДУЛЬ PARALLAX-ЭФФЕКТА ПРИ ДВИЖЕНИИ МЫШИ НА ГЛАВНОЙ СТРАНИЦЕ
export default function () {
    // Определение постоянных переменных
    const parallaxCont = document.getElementById('main__parallax'),
        layers = parallaxCont.children;

    function _moveLayers(e) {
        // Вычисляется разница между положением курсора мыши и центром экрана
        let initialX = (window.innerWidth / 2) - e.pageX,
            initialY = (window.innerHeight / 2) - e.pageY;
        // Обход массива слоев параллакс-эффекта
        [].slice.call(layers).forEach(function (layer, index) {
            let devider = index / 125, // чувствительность параллакса
                positionX = initialX * devider, // смещение по оси Х
                positionY = initialY * devider, // смещение по оси Y
                bottomPosition = (window.innerHeight / 2) * devider, // Фиксация слоев в нижней точке
                transformString = 'translate(' + positionX + 'px,' + positionY + 'px)', // смещение слоев
                image = layer.firstElementChild;
            layer.style.transform = transformString;
        });
    };

    function _mouseMoveListener() {
        window.addEventListener('mousemove', _moveLayers);
    }
    return {
        init: _mouseMoveListener()
    };
};