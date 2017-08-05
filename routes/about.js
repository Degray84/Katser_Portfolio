const express = require('express');
const router = express.Router();
const skills = require('../models/skills.json');

router.get('/', function(req, res, next) {
    let obj = {
        title: 'Обо мне'
    }
    Object.assign(obj, req.app.locals.settings, { skills: skills, items: {} });

    res.render('pages/about', obj);
});



module.exports = router;