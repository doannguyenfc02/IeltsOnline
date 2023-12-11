const e = require('express');
const Course = require('../models/Course');
const { mulipleMongooseToObject } = require('../../until/mongoose')

class ExamController {
    // GET /
    async index(req, res, next) {
        res.render('Exam/ex1');

    }



}

module.exports = new ExamController;
