export default function() {
    let tabList = document.querySelectorAll('.admin-tab-item'),
        contentList = document.querySelectorAll('.admin-content-list__item');

    function _tabs(tabsArr, contentArr, tabsClass, contentClass) {
        for (let i = 0; i < tabsArr.length; i++) {
            tabsArr[i].addEventListener('click', function(ev) {
                ev.preventDefault();
                for (let a = 0; a < tabsArr.length; a++) {
                    contentArr[a].classList.remove(contentClass);
                    contentArr[i].classList.add(contentClass);
                    tabList[a].classList.remove(tabsClass);
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