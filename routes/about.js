const express = require('express');
const router = express.Router();
const skills = require('../models/skills.json');
// const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
    let obj = {
        title: 'Обо мне'
    }

    Object.assign(obj, req.app.locals.settings, { skills: skills, items: {} });
    // const modelSkills = mongoose.model('skills');
    // modelSkills.find().then(skills => {
    //     Object.assign(obj, { skills: skills });

    // })
    res.render('pages/about', obj);
});



module.exports = router;