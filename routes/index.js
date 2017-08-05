const express = require('express');
const router = express.Router();
const config = require('../config.json');

router.get('/', function(req, res) {
    let obj = {
        title: 'Главная страница'
    };
    Object.assign(obj, req.app.locals.settings);
    res.render('pages/index', obj);
});

router.post('/author', function(req, res) {

    if (!req.body.login) {
        return res.json({ status: 'Введите логин!' });
    } else
    if (!req.body.pass) {
        return res.json({ status: 'Введите пароль!' });
    } else
    if (!req.body.humman) {
        return res.json({ status: 'Вы не человек?' });
    } else
    if (!req.body.robot) {
        return res.json({ status: 'Вы робот?' });
    } else
    if (req.body.login != config.admin.user) {
        return res.json({ status: 'Неправильный логин!' });
    } else
    if (req.body.pass != config.admin.password) {
        return res.json({ status: 'Неправильный пароль!' });
    } else {
        res.json({
            status: "Вход успешно выполнен"
        });
    }
});

module.exports = router;