import prepareSend from '../prepareSend';
import {
    setPopup
} from './_popupAdd';
import {
    message
} from './_message';
// МОДУЛЬ ВАЛИДАЦИИ ФОРМЫ ОТПРАВКИ СООБЩЕНИЯ НА ПОЧТУ
export default function () {
    // Объявление констант
    const formMail = document.querySelector('#mail');
    const submitSb = document.querySelector('.works-submit-sb'),
        submitRs = document.querySelector('.works-submit-rs'),
        compliteMes = document.querySelector('.notify-complite'),
        namePlace = document.querySelector('.works-submit__name'),
        emailPlace = document.querySelector('.works-submit__email'),
        messPlace = document.querySelector('.works-submit__message'),
        nameInput = namePlace.querySelector('.works-submit_place'),
        emailInput = emailPlace.querySelector('.works-submit_place'),
        messInput = messPlace.querySelector('.works-submit_place'),
        closeComplite = document.querySelector('.notify-btn');

    function _setUpListeners() {
        submitSb.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (nameInput.value == '') {
                setPopup(namePlace, "Вы не ввели имя", 'bottom');
                nameInput.classList.add('login-place-input_invalid');
                setTimeout(function () {
                    nameInput.classList.remove('login-place-input_invalid');
                }, 3000);

            } else if (emailInput.value == '') {

                setPopup(emailPlace, "Вы не ввели Email", 'bottom');
                emailInput.classList.add('login-place-input_invalid');
                setTimeout(function () {
                    emailInput.classList.remove('login-place-input_invalid');
                }, 3000);

            } else if (messInput.value == '') {
                setPopup(messPlace, "Введите сообщение", 'top');
                messInput.classList.add('login-place-input_invalid');
                setTimeout(function () {
                    messInput.classList.remove('login-place-input_invalid');
                }, 3000);

            }
            if (nameInput.value != '') {
                nameInput.classList.add('login-place-input_valid');
                if (emailInput.value != '') {
                    emailInput.classList.add('login-place-input_valid');
                    if (messInput.value != '') {
                        messInput.classList.add('login-place-input_valid');
                        const data = {
                            name: formMail.name.value,
                            email: formMail.email.value,
                            text: formMail.text.value
                        };
                        const url = './works';
                        prepareSend(url, formMail, data);
                        message('Сообщение отправлено');
                        nameInput.value = '';
                        nameInput.classList.remove('login-place-input_valid');
                        emailInput.value = '';
                        emailInput.classList.remove('login-place-input_valid');
                        messInput.value = '';
                        messInput.classList.remove('login-place-input_valid');
                    }
                }
            }
        })

        submitRs.addEventListener('click', function (ev) {
            ev.preventDefault();
            nameInput.value = '';
            nameInput.classList.remove('login-place-input_valid');
            emailInput.value = '';
            emailInput.classList.remove('login-place-input_valid');
            messInput.value = '';
            messInput.classList.remove('login-place-input_valid');
        })
    }

    function _init() {
        _setUpListeners();
    }
    return {
        init: _init()
    };
};