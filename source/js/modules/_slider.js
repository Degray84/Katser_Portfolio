export default function() {
    var firstWork = Array.prototype.slice.call(document.querySelectorAll('.first-work-img')),
        secondWork = Array.prototype.slice.call(document.querySelectorAll('.second-work-img')),
        thirdWork = Array.prototype.slice.call(document.querySelectorAll('.third-work-img')),
        desc = Array.prototype.slice.call(document.querySelectorAll('.slider-desc')),
        activeDesc = document.querySelector('.work_active'),
        leftArrow = document.querySelector('.arrow-works'),
        rightArrow = document.querySelector('.arrow-up__pic');

    // Сдвиг массива второго контейнера изображений
    _shiftArray(secondWork, "left");
    // Сдвиг массива третьего контенера изображений
    _shiftArray(thirdWork, "left");
    _shiftArray(thirdWork, "left");
    // Передачи ссылок в массив
    function _pushLinks(wirk1, ...workN) {
        for (let i = 0; i < arguments.length; i++) {
            works.push(arguments[i]);
        }
    }
    // Сдвиг массива на шаг в лево или право
    function _shiftArray(arr, way) {
        if (way == 'left') {
            let first = arr.shift();
            arr.push(first);
        }
        if (way == 'right') {
            let first = arr.pop();
            arr.unshift(first);
        }
    }
    // Привязка ссылок к тегам img
    function _linksInit() {
        for (let i = 0; i < desc.length; i++) {
            if (i == 0) {
                firstWork[i].classList.add('work_active');
                secondWork[i].classList.add('work_active');
                thirdWork[i].classList.add('work_active');
                desc[i].classList.add('work_active');
                _animation(firstWork[i], 'fade', 'up', 'hide')
                _animation(secondWork[i], 'fade', 'down', 'show')
                _animation(thirdWork[i], 'fade', 'up', 'show')
            } else {
                firstWork[i].classList.remove('work_active');
                secondWork[i].classList.remove('work_active');
                thirdWork[i].classList.remove('work_active');
                desc[i].classList.remove('work_active');
            }
        }
    }

    // Привязка ссылок и сдвиг массива вправо по клику на левую стрелку
    function _leftArrowEvent() {
        leftArrow.addEventListener("click", function(e) {
            e.preventDefault;
            _shiftArray(firstWork, "right");
            _shiftArray(secondWork, "right");
            _shiftArray(thirdWork, "right");
            _shiftArray(desc, "right");
            _linksInit();
        })
    };
    // Привязка ссылок и сдвиг массива влево по клику на правую стрелку
    function _rightArrowEvent() {
        rightArrow.addEventListener("click", function(e) {
            e.preventDefault;
            _shiftArray(firstWork, "left");
            _shiftArray(secondWork, "left");
            _shiftArray(thirdWork, "left");
            _shiftArray(desc, "left");
            _linksInit();
        })
    };
    // Анимация прозрачности fade: определяет путь(вниз или вверх), и видимость(появление или исчезание)
    function _animation(obj, type, way, vis) {
        if (type == 'fade') {
            if (way == 'up') {
                if (vis == 'show') {
                    obj.classList.add('fadeInUp');
                    setTimeout(function() { obj.classList.remove('fadeInUp') }, 1000);

                }
                if (vis == 'hide') {
                    obj.classList.add('fadeOutUp');
                    setTimeout(function() { obj.classList.remove('fadeOutUp') }, 1000);
                }
            }
            if (way == 'down') {
                if (vis == 'show') {
                    obj.classList.add('fadeInDown');
                    setTimeout(function() { obj.classList.remove('fadeInDown') }, 1000);
                }
                if (vis == 'hide') {
                    obj.classList.add('fadeOutDown');
                    setTimeout(function() { obj.classList.remove('fadeOutDown') }, 1000);
                }
            }
        }
    }
    // Инициализация
    function _init() {
        _linksInit()
        _leftArrowEvent()
        _rightArrowEvent()
    }

    return {
        init: _init()
    }

};