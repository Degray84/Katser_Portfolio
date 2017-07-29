    function animate(content, type) {
        content.classList.add('animated');
        content.classList.add(type);
        setTimeout(function () {
            content.classList.remove(type);
            content.classList.remove('animated');
        }, 1000)
    }

    function animateList(list, type, speed) {
        let i = 0;
        (function aniList() {
            const iMax = list.length - 1;
            list[i].style.display = 'block';
            animate(list[i], type)
            setTimeout(function () {
                if (i < iMax) {
                    i++;
                    aniList();
                }
            }, speed);
        }())
    }

    export {
        animate,
        animateList
    };