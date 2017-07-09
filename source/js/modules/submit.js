export default function() {

    var submitSb = document.querySelector('.works-submit-sb'),
        submitRs = document.querySelector('.works-submit-rs'),
        compliteMes = document.querySelector('.notify-complite'),
        namePlace = document.querySelector('.works-submit__name'),
        emailPlace = document.querySelector('.works-submit__email'),
        closeComplite = document.querySelector('.notify-btn');
    console.log(namePlace.querySelector('.works-submit_place').innerHTML == 1);

    function _setUpListeners() {
        submitSb.addEventListener('click', function(ev) {
            ev.preventDefault();
            if (namePlace.querySelector('.works-submit_place').innerHTML == 0) {
                _setPopup(namePlace, "Вы не ввели логин");
            }
            // compliteMes.style.display = 'block';
        })
        submitRs.addEventListener('click', function(ev) {
            ev.preventDefault();
            _setPopup(emailPlace, "Вы не ввели Email")
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
        _setUpListeners();
    }
    return {
        init: _init()
    };
};