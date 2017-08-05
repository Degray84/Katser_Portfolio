const express = require('express');
const router = express.Router();
const articles = require('../models/articles.json');

router.get('/', function(req, res) {
    let obj = {
        title: 'Блог'
    };
    Object.assign(obj, req.app.locals.settings, { items: articles.db });
    res.render('pages/blog', obj);
});

module.exports = router;