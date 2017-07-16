import { fileUpload } from '../sendAjax';
export default function() {
    var workUrl1 = "./assets/img/works/work1.png",
        workUrl2 = "./assets/img/works/work2.png",
        workUrl3 = "./assets/img/works/work3.png",
        workUrl4 = "./assets/img/works/work4.png",
        workUrl5 = "./assets/img/works/work5.png",
        works = [],
        firstWork = document.querySelector('.first-work-img'),
        secondWork = document.querySelector('.second-work-img'),
        thirdWork = document.querySelector('.third-work-img'),
        desc = Array.prototype.slice.call(document.querySelectorAll('.slider-desc')),
        activeDesc = document.querySelector('.work_active'),
        leftArrow = document.querySelector('.arrow-works'),
        rightArrow = document.querySelector('.arrow-up__pic');
    console.log(works);
    // Передачи ссылок в массив
    function _pushLinks(wirk1, ...workN) {
        for (let i = 0; i < arguments.length; i++) {
            works.push(arguments[i]);
        }
    }
    // Привязка ссылок к тегам img
    function _linksInit() {
        firstWork.src = works[0];
        secondWork.src = works[1];
        thirdWork.src = works[2];
        for (let i = 0; i < desc.length; i++) {
            if (i == 0) {
                desc[i].classList.add('work_active');
            } else { desc[i].classList.remove('work_active'); }
        }
    }
    // Сдвиг массива на шаг в лево или право
    function _shiftArray(arrImg, arrDesc, way) {
        if (way == 'left') {
            let firstImg = arrImg.shift();
            let firstDesc = arrDesc.shift();
            arrImg.push(firstImg);
            arrDesc.push(firstDesc);
        }
        if (way == 'right') {
            let firstImg = arrImg.pop();
            let firstDesc = arrDesc.pop();
            arrImg.unshift(firstImg);
            arrDesc.unshift(firstDesc);
        }
    }
    // Привязка ссылок и сдвиг массива вправо по клику на левую стрелку
    function _leftArrowEvent() {

        leftArrow.addEventListener("click", function(e) {
            e.preventDefault;
            _animation(firstWork, 'fade', 'up', 'hide')
            _animation(secondWork, 'fade', 'down', 'show')
            _animation(thirdWork, 'fade', 'up', 'show')
                // _animation(activeDesc, 'fade', 'up', 'show')
            _shiftArray(works, desc, "right");

            _linksInit();
        })

    };
    // Привязка ссылок и сдвиг массива влево по клику на правую стрелку
    function _rightArrowEvent() {
        rightArrow.addEventListener("click", function(e) {
            e.preventDefault;
            _animation(firstWork, 'fade', 'down', 'hide')
            _animation(secondWork, 'fade', 'up', 'show')
            _animation(thirdWork, 'fade', 'down', 'show')
                // _animation(activeDesc, 'fade', 'down', 'show')
            _shiftArray(works, desc, "left");
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
        _pushLinks(workUrl1, workUrl2, workUrl3, workUrl4, workUrl5)
        _linksInit()
        _leftArrowEvent()
        _rightArrowEvent()
    }

    return {
        init: _init()
    }

};