// МОДУЛЬ ВСПЛЫВАЮЩИХ СООБЩЕНИЙ POPUP
// place - элемент, к которому будет присоединяться сообщение
// text - текст сообщения
// dir - направление, bottom - внизу элемента, top - вверху элемента
function setPopup(place, text, dir) {
    // Элемент-контейнер сообщения 
    const mess = document.createElement('div'),
        // Блок стрелка, указывающая направление
        arrow = document.createElement('div'),
        // Блок контейнер, содержащий сообщение
        box = document.createElement('div'),
        // Объявление классов для элементов выше
        // Классы прописаны в popupAdd.scss
        classPopMessage = 'pop-message pop-message_color-red',
        classColorRed = 'pop-message_color-red',
        classPopMessageArrow = 'pop-message__arrow',
        classPopMessageBox = 'pop-message__box';
    // Объявление переменных, в которые будем помещать созданные элементы
    let popMessage,
        popArrow,
        popBox;
    // Элементы создаются в DOM только если в нем нету элемента с классом pop-message
    if (document.querySelector('.pop-message') === null) {
        // Привязывание к переменным созданных элементов
        popMessage = place.appendChild(mess);
        popArrow = popMessage.appendChild(arrow);
        popBox = popMessage.appendChild(box);
        // Задание классов
        popMessage.className = classPopMessage;
        popArrow.className = classPopMessageArrow;
        popBox.className = classPopMessageBox;
        // Помещение атрибута text внутрь тела popup
        popBox.innerHTML = text;
        // Задание родительскому элементу расположения поверх всех окон
        popMessage.parentElement.style.zIndex = '9999';
        // Настройка сообщения снизу
        if (dir === 'bottom') {
            popMessage.style = `top:${place.offsetHeight+8}px; left: 15px;`;
            popArrow.classList.add('pop-message__arrow_up');
        }
        // Настройка сообщения сверху
        if (dir === 'top') {
            popMessage.style = `top:-${popMessage.offsetHeight-12}px; left: 15px;`;
            popArrow.classList.add('pop-message__arrow_down');
        }
        // Прослушка на контейнере сообщения, при клике на него, оно удаляется
        popMessage.addEventListener('click', () => {
            popMessage.parentElement.style.zIndex = '';
            popMessage.remove();
        })
        // Удаление сообщения через 1.5 секунды после появления
        setTimeout(function () {
            popMessage.parentElement.style.zIndex = '';
            popMessage.remove();
        }, 1500)
    }
}
export {
    setPopup
};