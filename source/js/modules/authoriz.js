export default function() {
    var comeIn = document.querySelector('#comeIn'),
        namePlace = document.querySelector('.card-login__name'),
        passPlace = document.querySelector('.card-login__pass'),
        nameInput = namePlace.querySelector('.login-place-input'),
        passInput = passPlace.querySelector('.login-place-input'),
        nameIcon = namePlace.querySelector('.social__icon_smaller'),
        passIcon = passPlace.querySelector('.social__icon_smaller');


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
        if (typeof(popMessage) != undefined) {
            // place.removeChild(document.querySelector('.pop-message'));
        }
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

    function _setUpListeners() {
        comeIn.addEventListener('click', function(ev) {
            ev.preventDefault();
            console.log(namePlace.querySelector('.login-place-input').value);
            if (nameInput.value == '') {
                _setPopup(namePlace, "Вы не ввели логин");
                nameInput.classList.add('login-place-input_invalid');
                setTimeout(function() {
                    nameInput.classList.remove('login-place-input_invalid');
                }, 3000);
                nameIcon.classList.add('icon_color-red');
                setTimeout(function() {
                    nameIcon.classList.remove('icon_color-red');
                }, 3000);
            } else if (passInput.value == '') {

                _setPopup(passPlace, "Вы не ввели логин");
                passInput.classList.add('login-place-input_invalid');
                setTimeout(function() {
                    passInput.classList.remove('login-place-input_invalid');
                }, 3000);
                passIcon.classList.add('icon_color-red');
                setTimeout(function() {
                    passIcon.classList.remove('icon_color-red');
                }, 3000);
            }
            if (nameInput.value != '') {
                nameInput.classList.add('login-place-input_valid');
                nameIcon.classList.add('icon_color-green');
            }
            if (passInput.value != '') {
                passInput.classList.add('login-place-input_valid');
                passIcon.classList.add('icon_color-green');
            }


            // compliteMes.style.display = 'block';
        })

    }

    function _init() {
        _setUpListeners()
    }
    return {
        init: _init()
    }
};