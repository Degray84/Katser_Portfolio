const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const works = require('../models/works.json');
const config = require('../config.json');
router.get('/', (req, res) => {
    let obj = {
        title: 'Мои работы'
    };
    Object.assign(obj, req.app.locals.settings, { items: works.db });
    res.render('pages/works', obj);
});

router.post('/slider', (req, res) => {
    res.json(works.db);
});


router.post('/', (req, res) => {
    console.log(`"${req.body.name}"`);

    //инициализируем модуль для отправки писем и указываем данные из конфига
    const transporter = nodemailer.createTransport(config.mail.smtp);
    const mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: config.mail.smtp.auth.user,
        subject: config.mail.subject,
        text: req
            .body
            .text
            .trim()
            .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
    };
    //отправляем почту
    transporter.sendMail(mailOptions, function(error, info) {
        //если есть ошибки при отправке - сообщаем об этом
        if (error) {
            return res.json({ status: 'При отправке письма произошла ошибка' });
        }
        res.json({ status: 'Письмо успешно отправлено' });
    });
});

module.exports = router;