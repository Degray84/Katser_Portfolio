import prepareSend from '../prepareSend';
export default function() {
    const formMail = document.querySelector('#mail');
    var submitSb = document.querySelector('.works-submit-sb'),
        submitRs = document.querySelector('.works-submit-rs'),
        compliteMes = document.querySelector('.notify-complite'),
        namePlace = document.querySelector('.works-submit__name'),
        emailPlace = document.querySelector('.works-submit__email'),
        messPlace = document.querySelector('.works-submit__message'),
        nameInput = namePlace.querySelector('.works-submit_place'),
        emailInput = emailPlace.querySelector('.works-submit_place'),
        messInput = messPlace.querySelector('.works-submit_place'),
        closeComplite = document.querySelector('.notify-btn');
    // if (formMail) {
    //     formMail.addEventListener('submit', prepareSendMail);
    // }

    // export default function prepareSendMail(e) {
    //     e.preventDefault();
    //     console.log(formMail);
    //     const data = {
    //         name: formMail.name.value,
    //         email: formMail.email.value,
    //         text: formMail.text.value
    //     };
    //     const url = '/works';

    //     prepareSend(url, formMail, data);
    // }
    function _setUpListeners() {
        submitSb.addEventListener('click', function(ev) {
            ev.preventDefault();
            if (nameInput.value == '') {
                _setPopup(namePlace, "Вы не ввели имя");
                nameInput.classList.add('login-place-input_invalid');
                setTimeout(function() {
                    nameInput.classList.remove('login-place-input_invalid');
                }, 3000);

            } else if (emailInput.value == '') {

                _setPopup(emailPlace, "Вы не ввели Email");
                emailInput.classList.add('login-place-input_invalid');
                setTimeout(function() {
                    emailInput.classList.remove('login-place-input_invalid');
                }, 3000);

            } else if (messInput.value == '') {
                _setPopup(messPlace, "Введите сообщение");
                messInput.classList.add('login-place-input_invalid');
                setTimeout(function() {
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

                        compliteMes.style.display = 'block';
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


        submitRs.addEventListener('click', function(ev) {
            ev.preventDefault();
            nameInput.value = '';
            nameInput.classList.remove('login-place-input_valid');
            emailInput.value = '';
            emailInput.classList.remove('login-place-input_valid');
            messInput.value = '';
            messInput.classList.remove('login-place-input_valid');
        })
        closeComplite.addEventListener('click', function(ev) {
            ev.preventDefault();
            compliteMes.style.display = 'none';
        })
    }

    function _setPopup(place, text) {
        let message = document.createElement('div'),
            popMessage,
            arrow = document.createElement('div'),
            popArrow,
            box = document.createElement('div'),
            popBox,
            classPopMessage = 'pop-message pop-message_color-red',
            classColorRed = 'pop-message_color-red',
            classPopMessageArrow = 'pop-message__arrow',
            classPopMessageBox = 'pop-message__box';
        if (typeof(popMessage) != undefined) {}
        popMessage = place.appendChild(message);
        popArrow = popMessage.appendChild(arrow);
        popBox = popMessage.appendChild(box);
        popMessage.className = classPopMessage;
        popArrow.className = classPopMessageArrow;
        popBox.className = classPopMessageBox;
        popBox.innerHTML = text;
        setTimeout(function() {
            place.removeChild(document.querySelector('.pop-message'));
        }, 3000)
    }

    function _init() {
        _setUpListeners();
    }
    return {
        init: _init()
    };
};