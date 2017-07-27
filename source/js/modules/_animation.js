    function animate(content, type) {
    const aniClass = `animated ${type}`;
        content.classList.add(aniClass);
        setTimeout(function() {
            content.classList.remove(aniClass);
        }, 10000)
    }
    export { animate };