(function() {
    'use strict';
    var indexCard = document.getElementsByClassName("card-flip"),
        authoriz = document.getElementsByClassName("login"),
        indexBack = document.getElementsByClassName("card-login-nav__link")
    $(authoriz).click(function(e) {
        e.preventDefault();
        $(indexCard).css("transform", "rotateY(180deg)");
        $(this).fadeOut(1000);
    });
    $(indexBack).click(function(e) {
        e.preventDefault();
        $(indexCard).css("transform", "rotateY(0deg)");
        $(authoriz).fadeIn(1000);
    });
})();