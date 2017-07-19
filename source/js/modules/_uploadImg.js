import { fileUpload } from '../sendAjax';

export default function() {
    const btnUpload = document.querySelector('#btn-save-work');


    function message(mess) {
        const resultContainer = document.querySelector('.notify-complite'),
            closeComplite = document.querySelector('.notify-btn'),
            closeTitle = document.querySelector('.notify-title');

        closeTitle.innerHTML = mess;
        resultContainer.style.display = "block";
        closeComplite.addEventListener('click', function() {
            resultContainer.style.display = "none";
        })
    }
    btnUpload.addEventListener('click', function() {


        let file = document.querySelector('#admin-add-img').files[0];
        console.log(file);
        let name = document.querySelector('#admin-add-name').value;
        console.log(name);
        let desc = document.querySelector('#admin-add-desc').value;
        console.log(desc);
        const url = '/admin/upload';
        let formData = new FormData();
        formData.append('photo', file, file.name);
        formData.append('name', name);
        formData.append('desc', desc);
        fileUpload(url, formData, data => {
            message(data.status);
            console.log(data.name);
            console.log(data.desc);
            console.log(data.work);
        })
    });
}