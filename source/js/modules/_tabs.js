// МОДУЛЬ ТАБОВ
export default function () {
    // Объявление констант
    const tabList = document.querySelectorAll('.admin-tab-item'),
        contentList = document.querySelectorAll('.admin-content-list__item');
    // Модуль табов
    // tabsArr - массив табов
    // contentArr - массив контента
    // tabsClass - css класс активного таба
    // contentClass - css класс активного блока контента
    function _tabs(tabsArr, contentArr, tabsClass, contentClass) {
        for (let i = 0; i < tabsArr.length; i++) {
            // Объявление прослушки на клик мыши для каждого таба
            tabsArr[i].addEventListener('click', function (ev) {
                ev.preventDefault();
                for (let a = 0; a < tabsArr.length; a++) {
                    // Убрать активный класс со всех табов
                    contentArr[a].classList.remove(contentClass);
                    // Присвоить активный класс табу, на который кликнули
                    contentArr[i].classList.add(contentClass);
                    // Убрать активный класс со всех блоков контента
                    tabList[a].classList.remove(tabsClass);
                    // Присвоить активный класс блока контента с индексом,
                    // соответствуюшим табу, на который кликнули
                    tabList[i].classList.add(tabsClass);
                }
            })
        }
    }

    function _init() {
        _tabs(tabList, contentList, 'admin-tab-item_active', 'admin-content-list__item_active')
    }
    return {
        init: _init()
    }
};