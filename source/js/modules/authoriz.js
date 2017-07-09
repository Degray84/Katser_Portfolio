export default function() {
    let comeIn = document.querySelector('#comeIn'),
        namePlace = document.querySelector('.card-login__name'),
        passPlace = document.querySelector('.card-login__pass'),
        nameInput = namePlace.querySelector('.login-place-input'),
        passInput = passPlace.querySelector('.login-place-input');
    console.log(comeIn);

    function _setUpListeners() {
        console.log(2);
        comeIn.addEventListener('click', function(ev) {
            ev.preventDefault();
            // if (namePlace.querySelector('.works-submit_place').innerHTML == 0) {
            console.log(namePlace);
            _setPopup(namePlace, "Вы не ввели логин");
            // }
            // compliteMes.style.display = 'block';
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

    function _init() {
        _setUpListeners()
    }
    return {
        init: _init()
    }
};