import {
    sendJson
} from '../sendAjax';
import {
    message
} from './_message';
// МОДУЛЬ ОТПРАВКИ СТАТЬИ БЛОГА ИЗ ПАНЕЛИ АДМИНИСТРАТОРА
export default function () {
    // Объявление констант
    const formBlog = document.querySelector('#blog');
    const addArt = document.querySelector('#btn-save-blog');
    const data = {
        title: formBlog.title.value,
        date: formBlog.date.value,
        article: formBlog.article.value
    };
    const url = './admin/addpost';
    // Прослушка при клике 
    addArt.addEventListener('click', function () {
        // Послать запрос с данными
        sendJson(url, data, "POST", function (status) {
            // Вызов функции и помещение в нее текста из collback
            message(status);
        });

    })
};