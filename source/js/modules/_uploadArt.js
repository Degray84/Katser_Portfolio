import {
    sendJson
} from '../sendAjax';
import {
    message
} from './_message';
// МОДУЛЬ ОТПРАВКИ СТАТЬИ БЛОГА ИЗ ПАНЕЛИ АДМИНИСТРАТОРА
export default function () {
    // Объявление констант
    const addArt = document.querySelector('#btn-save-blog');
    const formBlog = document.querySelector('#blog');
    const url = './admin/addpost';
    // Прослушка при клике 
    addArt.addEventListener('click', function () {
        let data = {
            title: formBlog.title.value,
            date: formBlog.date.value,
            article: formBlog.article.value
        };
        // Послать запрос с данными
        sendJson(url, data, "POST", function (status) {
            // Вызов функции и помещение в нее текста из collback
            message(status);
        });

    })
};