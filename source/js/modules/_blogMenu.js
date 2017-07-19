export default function() {
    let blogSection = document.querySelector('.blog'),
        heroSection = document.querySelector('.hero'),
        blogMenu = document.querySelector('.blog__left'),
        blogList = document.querySelector('.blog-nav-list'),
        articlesList = document.querySelectorAll('.blog-content-item'),
        navList = document.querySelectorAll('.blog-nav-item'),
        textList = document.querySelectorAll('.blog-nav-text'),
        blockList = document.querySelectorAll('.blog-nav-block'),
        navButton = document.querySelector('.halfcircle');
    // Добавляем прослушку на скролл
    function _setUpListenters() {
        window.addEventListener('scroll', function() {
                // Добавляем переменную, которая определяет расстояние от секции блога до верхней границы документа, 
                // добавляет меню fixed, если выходит за границы значения и убирает fixed, если заходит обратно
                let menuOffset = blogSection.getBoundingClientRect().top;
                if (menuOffset <= 90) {
                    blogMenu.classList.remove('blog__left_relative');
                    blogMenu.classList.add('blog__left_fixed');
                }
                if (menuOffset > 90) {
                    blogMenu.classList.remove('blog__left_fixed');
                    blogMenu.classList.add('blog__left_relative');
                }
                _articleOffset()

            })
            // Скрывает или добавляет меню при клике на кнопку
        navButton.addEventListener('click', function() {
            blogList.classList.toggle('blog-nav-list_active');
            navButton.classList.toggle('halfcircle_active');
        })
    }

    //Проходится по массиву статей, определяет положение относительно отображения, добавляет активный класс, если статья в зоне видимости, убирает активный класс у остальных
    function _articleOffset() {
        for (let i = 0; i < articlesList.length; i++) {
            let articleOffset = articlesList[i].getBoundingClientRect().top,
                pageOffset = articlesList[i].offsetTop + heroSection.offsetHeight + 30,
                offsetPoint = window.innerHeight / 2;

            if (articleOffset <= offsetPoint) {
                for (let a = 0; a < articlesList.length; a++) {
                    textList[a].classList.remove('blog-nav-text_active');
                    textList[i].classList.add('blog-nav-text_active');
                    blockList[a].classList.remove('blog-nav-block_active');
                    blockList[i].classList.add('blog-nav-block_active');
                }
            }
            navList[i].addEventListener('click', function() {
                window.scrollTo(0, pageOffset);
            })

        }
    }

    function _init() {
        _setUpListenters()
    }
    return {
        init: _init()
    }
};