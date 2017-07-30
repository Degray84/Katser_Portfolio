// МОДУЛЬ АНИМАЦИИ
// content - элемент, который будет анимироваться
// type - тип анимации из animate.css
// list - массив элементов, к которым поочередно будет применяться animate
function animate(content, type) {
    // Добваляются классы к элементу content
    content.classList.add('animated');
    content.classList.add(type);
    // Удаляются классы через 1 сек
    setTimeout(function () {
        content.classList.remove(type);
        content.classList.remove('animated');
    }, 1000)
}

function animateList(list, type) {
    let i = 0;
    (function aniList() {
        // Определяется длина массива 
        const iMax = list.length - 1;
        // Показывается элемент массива, если он скрыт
        list[i].style.display = 'block';
        // Анимируется элемент массива
        animate(list[i], type)
        // Выставляется задержка между анимациями элементов массива
        setTimeout(function () {
            // Каждые 0.15 сек вызывается функция aniList 
            // пока счетчик не дойдет до конца массива
            if (i < iMax) {
                i++;
                aniList();
            }
        }, 150);
    }())
}

export {
    animate,
    animateList
};