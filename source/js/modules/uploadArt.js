import { sendJson } from '../sendAjax';

export default function() {
    const formBlog = document.querySelector('#blog');
    const addArt = document.querySelector('#btn-save-blog');

    function message(mess) {
        const resultContainer = document.querySelector('.notify-complite'),
            closeComplite = document.querySelector('.notify-btn'),
            closeTitle = document.querySelector('.notify-title');

        closeTitle.innerHTML = mess;
        resultContainer.style.display = "block";
        closeComplite.addEventListener('click', function() {
            resultContainer.style.display = "none";
        })
    };

    const data = {
        title: formBlog.title.value,
        date: formBlog.date.value,
        article: formBlog.article.value
    };
    const url = './admin/addpost';
    addArt.addEventListener('click', function() {
        sendJson(url, data, "POST", function(status) {
            message(status);
        });

        // nameInput.value = '';
        // nameInput.classList.remove('login-place-input_valid');
        // emailInput.value = '';
        // emailInput.classList.remove('login-place-input_valid');
        // messInput.value = '';
        // messInput.classList.remove('login-place-input_valid');

    })
};