import { sendJson } from '../sendAjax';
import { setPopup } from './_popupAdd';
export default function() {
    const comeIn = document.querySelector('#comeIn'),
        robot = document.querySelector('#rad1'),
        humman = document.querySelector('#ch'),
        hummanPlace = document.querySelector('.human-ckeckbox'),
        namePlace = document.querySelector('.card-login__name'),
        passPlace = document.querySelector('.card-login__pass'),
        cardLogin = document.querySelector('.card-login');

    // При клике собирает данные из формы cardLogin и отправляет ajax запрос по адресу url
    function _setUpListeners() {
        comeIn.addEventListener('click', function(ev) {
            const data = {
                login: cardLogin.login.value,
                pass: cardLogin.pass.value,
                humman: cardLogin.humman.checked,
                robot: cardLogin.robot[0].checked
            };
            const url = '/author';
            sendJson(url, data, "POST", function(st) {
                checkInput(st); // проверяем данные, отображаем popup
                validInput(); // подсвечиваем поле
            });
        })
    }
    // Берет ответ от сервера mess, проверяет его и привязывает popup к нужному полю формы.
    function checkInput(mess) {
        switch (mess) {
            case 'Введите логин!':
                setPopup(namePlace, mess);
                break;
            case 'Неправильный логин!':
                setPopup(namePlace, mess);
                break;
            case 'Введите пароль!':
                setPopup(passPlace, mess);
                break;
            case 'Неправильный пароль!':
                setPopup(passPlace, mess);
                break;
        }
    }
    // Находит валидный и невалидный input, находит соответствующую ему иконку и подвсечивает соответствующим цветом
    function validInput() {
        const nameInputs = document.querySelectorAll('.login-place-input');
        for (let i = 0; i < nameInputs.length; i++) {
            let iconInput = nameInputs[i].closest('.card-login-place').querySelector('.social__icon_smaller');
            if ((nameInputs[i].value == '')) {
                nameInputs[i].classList.add('login-place-input_invalid')
                iconInput.classList.add('icon_color-red');
                setTimeout(function() {
                    nameInputs[i].classList.remove('login-place-input_invalid')
                    iconInput.classList.remove('icon_color-red');
                }, 2000);
            } else {
                nameInputs[i].classList.remove('login-place-input_invalid')
                iconInput.classList.remove('icon_color-red');
                nameInputs[i].classList.add('login-place-input_valid')
                iconInput.classList.add('icon_color-green');
                setTimeout(function() {
                    nameInputs[i].classList.remove('login-place-input_valid')
                    iconInput.classList.remove('icon_color-green');
                }, 2000);
            }
        }
    }

    function _init() {
        _setUpListeners()
    }
    return {
        init: _init()
    }
};