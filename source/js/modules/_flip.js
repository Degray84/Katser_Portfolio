export default function() {
    var indexCard = document.getElementsByClassName("card-flip"),
        authoriz = document.getElementsByClassName("login"),
        indexBack = document.getElementById("goBack");

    function _authorization() {
        $(authoriz).click(function(e) {
            e.preventDefault();
            $(indexCard).css("transform", "rotateY(180deg)");
            $(this).fadeOut(1000);
        });
    };

    function _goBack() {
        $(indexBack).click(function(e) {
            e.preventDefault();
            $(indexCard).css("transform", "rotateY(0deg)");
            $(authoriz).fadeIn(1000);
        });
    };

    function _init() {
        _authorization();
        _goBack();
    }
    return {
        init: _init()
    }
};