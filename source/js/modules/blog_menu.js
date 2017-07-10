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

    function _setUpListenters() {
        window.addEventListener('scroll', function() {
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
        navButton.addEventListener('click', function() {
            // console.log(navList, navButton)
            blogList.classList.toggle('blog-nav-list_active');
            navButton.classList.toggle('halfcircle_active');
        })
    }


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