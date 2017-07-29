    function setPopup(place, text) {
        const mess = document.createElement('div'),
            arrow = document.createElement('div'),
            box = document.createElement('div'),
            classPopMessage = 'pop-message pop-message_color-red',
            classColorRed = 'pop-message_color-red',
            classPopMessageArrow = 'pop-message__arrow',
            classPopMessageBox = 'pop-message__box';
        let popMessage,
            popArrow,
            popBox;
        popMessage = place.appendChild(mess);
        popArrow = popMessage.appendChild(arrow);
        popBox = popMessage.appendChild(box);
        popMessage.className = classPopMessage;
        popArrow.className = classPopMessageArrow;
        popBox.className = classPopMessageBox;
        popBox.innerHTML = text;
        setTimeout(function () {
            place.removeChild(document.querySelector('.pop-message'));
        }, 2000)
    }
    export {
        setPopup
    };