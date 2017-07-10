export default function() {
    var urlLaptop1 = "../assets/img/parallax(laptop-1575)/Layer(000).png",
        urlLaptop2 = "../assets/img/parallax(laptop-1575)/Layer(001).png",
        urlLaptop3 = "../assets/img/parallax(laptop-1575)/Layer(002).png",
        urlLaptop4 = "../assets/img/parallax(laptop-1575)/Layer(003).png",
        urlLaptop5 = "../assets/img/parallax(laptop-1575)/Layer(004).png",
        urlLaptop6 = "../assets/img/parallax(laptop-1575)/Layer(005).png",
        urlLaptop7 = "../assets/img/parallax(laptop-1575)/Layer(006).png",
        urlLaptop8 = "../assets/img/parallax(laptop-1575)/Layer(007).png",
        urlLaptop9 = "../assets/img/parallax(laptop-1575)/Layer(008).png",
        urlLaptop10 = "../assets/img/parallax(laptop-1575)/Layer(009).png",
        urlDesktop1 = "../assets/img/parallax(desktop-2100)/Layer(000).png",
        urlDesktop2 = "../assets/img/parallax(desktop-2100)/Layer(001).png",
        urlDesktop3 = "../assets/img/parallax(desktop-2100)/Layer(002).png",
        urlDesktop4 = "../assets/img/parallax(desktop-2100)/Layer(003).png",
        urlDesktop5 = "../assets/img/parallax(desktop-2100)/Layer(004).png",
        urlDesktop6 = "../assets/img/parallax(desktop-2100)/Layer(005).png",
        urlDesktop7 = "../assets/img/parallax(desktop-2100)/Layer(006).png",
        urlDesktop8 = "../assets/img/parallax(desktop-2100)/Layer(007).png",
        urlDesktop9 = "../assets/img/parallax(desktop-2100)/Layer(008).png",
        urlDesktop10 = "../assets/img/parallax(desktop-2100)/Layer(009).png",
        urlRetina1 = "../assets/img/parallax(2x)/Layer(000).png",
        urlRetina2 = "../assets/img/parallax(2x)/Layer(001).png",
        urlRetina3 = "../assets/img/parallax(2x)/Layer(002).png",
        urlRetina4 = "../assets/img/parallax(2x)/Layer(003).png",
        urlRetina5 = "../assets/img/parallax(2x)/Layer(004).png",
        urlRetina6 = "../assets/img/parallax(2x)/Layer(005).png",
        urlRetina7 = "../assets/img/parallax(2x)/Layer(006).png",
        urlRetina8 = "../assets/img/parallax(2x)/Layer(007).png",
        urlRetina9 = "../assets/img/parallax(2x)/Layer(008).png",
        urlRetina10 = "../assets/img/parallax(2x)/Layer(009).png",
        classLaptop = "parallax__image parallax_laptop",
        classDesktop = "parallax__image parallax_desktop",
        classRetina = "parallax__image parallax_retina";

    function loadImage(url, classPar) {
        return new Promise(function(resolve, reject) {
            var image = new Image();
            document.querySelector('.parallax').appendChild(image);
            image.src = url;
            image.className = classPar;
            image.addEventListener('load', function() {
                resolve();
            });
            image.addEventListener('error', function() {
                reject();
            });
        });
    }

    function _loadAdaptitve() {

        if (window.matchMedia("(max-width: 1399px)").matches) {
            loadImage(urlLaptop1, classLaptop)
                .then(loadImage(urlLaptop2, classLaptop))
                .then(loadImage(urlLaptop3, classLaptop))
                .then(loadImage(urlLaptop4, classLaptop))
                .then(loadImage(urlLaptop5, classLaptop))
                .then(loadImage(urlLaptop6, classLaptop))
                .then(loadImage(urlLaptop7, classLaptop))
                .then(loadImage(urlLaptop8, classLaptop))
                .then(loadImage(urlLaptop9, classLaptop));
        }

        if (window.matchMedia("(max-width: 1959px)").matches) {
            loadImage(urlDesktop1, classDesktop)
                .then(function() { return loadImage(urlDesktop2, classDesktop) })
                .then(function() { return loadImage(urlDesktop3, classDesktop) })
                .then(function() { return loadImage(urlDesktop4, classDesktop) })
                .then(function() { return loadImage(urlDesktop5, classDesktop) })
                .then(function() { return loadImage(urlDesktop6, classDesktop) })
                .then(function() { return loadImage(urlDesktop7, classDesktop) })
                .then(function() { return loadImage(urlDesktop8, classDesktop) })
                .then(function() { return loadImage(urlDesktop9, classDesktop) });

        }
        if (window.matchMedia("(min-width: 1960px)").matches) {
            loadImage(urlRetina1, classRetina)
                .then(function() { loadImage(urlRetina2, classRetina) })
                .then(function() { loadImage(urlRetina3, classRetina) })
                .then(function() { loadImage(urlRetina4, classRetina) })
                .then(function() { loadImage(urlRetina5, classRetina) })
                .then(function() { loadImage(urlRetina6, classRetina) })
                .then(function() { loadImage(urlRetina7, classRetina) })
                .then(function() { loadImage(urlRetina8, classRetina) })
                .then(function() { loadImage(urlRetina9, classRetina) });
        }
    }
    return {
        init: _loadAdaptitve()
    };
};