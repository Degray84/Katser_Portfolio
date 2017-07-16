import { fileUpload } from '../sendAjax';

const formUpload = document.querySelector('#upload');
formUpload.addEventListener('submit', prepareSendFile);

function prepareSendFile(e) {
    e.preventDevault();
    let resultContainer = formUpload.querySelector('.notify-title');
    let formData = new FormData();
    let file = document.querySelector('#file-select').files[0];
    let name = document.querySelector('#file-desc').value;
    const url = '/admin/upload';
    resultContainer.innerHTML = 'Загрузка...';
    fileUpload(url, formData, data => {
        resultContainer.innerHTML = data;
        formUpload.reset();
    });

}