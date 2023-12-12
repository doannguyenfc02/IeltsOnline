const e = require('express');
;
const Question = require('../models/Question');
const Exam = require('../models/Exam');



const { mulipleMongooseToObject } = require('../../until/mongoose')

class ExamController {
    // GET /
    async index(req, res, next) {
        Question.find({})
            .then(questions => {
                res.render('Exam/ex1', {
                    questions: mulipleMongooseToObject(questions)
                });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('Exam/create');
    }
    store(req, res, next) {
        const formData = req.body;
        const q = new Question(formData);
        q.save()
            .then(() => res.redirect('/exam'))
            .catch(error => {

            });
        // res.send("Course Save");
    }
    exam(req, res, next) {
        Question.find()
            .then(questions => {
                res.render('courses/view', {
                    questions: mulipleMongooseToObject(questions)
                });
            })
            .catch(next);
    }
 

}

module.exports = new ExamController;
