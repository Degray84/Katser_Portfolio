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
    export default function() { return _setPopup(place, text); }