import { sendJson } from './sendAjax';

export default function prepareSend(url, form, data, method = 'POST', cb) {
    sendJson(url, data, method, data => {
        form.reset();
        if (cb) {

            cb(data);
        }
    });
}