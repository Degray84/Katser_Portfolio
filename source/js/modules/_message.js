   import {
       animate
   } from './_animation';
   // МОДУЛЬ ВСПЛЫВАЮЩЕГО СООБЩЕНИЯ
   // mess - текст сообщения
   function message(mess) {
       // Объявление констант
       const resultContainer = document.querySelector('.notify-complite'),
           closeComplite = document.querySelector('.notify-btn'),
           closeTitle = document.querySelector('.notify-title');
       // Присвоение текста сообщения
       closeTitle.innerHTML = mess;
       animate(resultContainer, 'bounceIn')
       resultContainer.style.display = "block";
       closeComplite.addEventListener('click', function () {
           animate(resultContainer, 'bounceOut');
           setTimeout(function () {
               resultContainer.style.display = "none"
           }, 1000);
       })
   };
   export {
       message
   };