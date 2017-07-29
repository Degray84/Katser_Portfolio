    function animate(content, type) {
        content.classList.add('animated');
        content.classList.add(type);
        setTimeout(function() {
            content.classList.remove(type);
            content.classList.remove('animated');
        }, 1000)
    }
    export { animate };