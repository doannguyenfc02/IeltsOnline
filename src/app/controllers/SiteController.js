const e = require('express');
const Course = require('../models/Course');
const { mulipleMongooseToObject } = require('../../until/mongoose')

class SiteController {
    // GET /
    async index(req, res, next) {
        // try {
        //     const courses = await Course.find({}).exec();
        //     res.json(courses);
        // } catch (error) {
        //     next(error);
        //     res.status(400).json({ error: 'ERROR!' });
        // }

        // Course.find({})
        //     .then(courses => res.json(courses))
        //     .catch(next);
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mulipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }


    // res.json({
    //     name:'test'
    // });
    // res.render('home');
    // GET /search
    search(req, res) {
        res.render('search');
    }
    not(req, res){
        res.json(req.body);
    }
}

module.exports = new SiteController;
