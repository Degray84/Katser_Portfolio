 function sendJson(url, data, method, cb) {
     let xhr = new XMLHttpRequest();
     console.log(data);
     console.log(method);
     console.log(url);
     xhr.open(method, url, true);
     xhr.setRequestHeader('Content-Type', 'application/json');
     xhr.onload = function(e) {
         let result;
         try {
             result = JSON.parse(xhr.responseText);
         } catch (e) {
             cb("В данных ошибка");
         }
         //  cb(result.status);
     };
     xhr.send(JSON.stringify(data));
 }

 function fileUpload(url, data, cb) {
     let xhr = new XMLHttpRequest();
     xhr.open("POST", url, true);
     xhr.onload = function(e) {

         let result = JSON.parse(xhr.responseText);
         cb(result);
         console.log(result);
     };
     xhr.send(data);
 }
 export { sendJson, fileUpload };