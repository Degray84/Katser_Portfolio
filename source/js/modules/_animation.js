    function animate(content, type, speed) {
        content.classList.add('animated');
        content.classList.add(type);
        setTimeout(function () {
            content.classList.remove(type);
            content.classList.remove('animated');
        }, speed)
    }

    function animateList(list, type, speed) {
        let i = 0;
        (function aniList() {
            const iMax = list.length - 1;
            list[i].style.display = 'block';
            animate(list[i], type, speed)
            setTimeout(function () {
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