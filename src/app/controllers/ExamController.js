const e = require('express');
;
const Question = require('../models/Question');
const Exam = require('../models/Exam');


const { mongooseToObject } = require('../../until/mongoose')

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
    edit(req, res, next) {
        // res.send("LE Save");
        Question.findById(req.params.id)
            .then(question => {
                res.render('Exam/edit', {
                    question: mongooseToObject(question),  slug_c: req.params.slug
                });
            })
            .catch(next);
    }
    update(req, res, next) {
        Question.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/exam"))
            .catch(next);
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

    destroy(req, res, next) {
        Question.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
 

}

module.exports = new ExamController;
