const express = require('express');
const router = express.Router();
const skills = require('../models/skills.json');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const config = require('../config.json');
const mongoose = require('mongoose');


router.get('/', function (req, res) {
    let obj = {
        title: 'Панель администратора'
    };
    Object.assign(obj, req.app.locals.settings, {
        skills: skills
    });
    res.render('pages/admin', obj);
});
router.post('/upload', function (req, res) {
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), config.upload);
    form.parse(req, function (err, fields, files) {
        if (err) {
            return res.json({
                status: 'Не удалось загрузить'
            });
        }
        if (!fields.name) {
            fs.unlink(files.photo.path);
            return res.json({
                status: 'Не указано название проекта!'
            });
        }
        if (!fields.desc) {
            fs.unlink(files.photo.path);
            return res.json({
                status: 'Не указаны технологии!'
            });
        }

        let fileName = path.join(config.upload, files.photo.name);
        console.log(fileName);
        fs.rename(files.photo.path, fileName, (err) => {
            if (err) {
                fs.unlink(fileName);
                fs.rename(files.photo.path, fileName);
            }
            const Model = mongoose.model('works');
            const item = new Model({
                name: fields.name,
                picture: path.join("./assets/img/works/", files.photo.name),
                desc: fields.desc
            });
            item.save().then(
                i => res.json({
                    
                    status: "Работа добавлена"
                }),
                e => res.json({
                    status: e.message
                })
            );
        });
    });
});
router.post('/addpost', (req, res) => {
    if (!req.body.title || !req.body.date || !req.body.article) {
        //если что-либо не указано - сообщаем об этом
        return res.json({
            status: 'Укажите данные!'
        });
    }
    const Model = mongoose.model('articles');
    let item = new Model({
        title: req.body.title,
        date: new Date(req.body.date),
        body: req.body.article
    });
    item.save().then(
        i => {
            return res.json({
                status: "Запись успешно добавлена"
            });
        },
        e => {
            const error = Object.keys(e.errors)
                .map(key => e.errors[key].message)
                .join(', ');

            res.json({
                status: error
            });
        }
    )
})

module.exports = router;