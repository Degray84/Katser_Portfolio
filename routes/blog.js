const express = require('express');
const router = express.Router();
const articles = require('../models/articles.json');
const mongoose = require('mongoose');

router.get('/', function (req, res) {
    let obj = {
        title: 'Блог'
    };
    const modelBlog = mongoose.model('articles');
    modelBlog.find().then(items => {
        Object.assign(obj, {
            items: items
        });
        res.render('pages/blog', obj);
    })
});

module.exports = router;