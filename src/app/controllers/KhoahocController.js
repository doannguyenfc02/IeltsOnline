// KhoahocControler.js

const Course = require('../models/Course');
const Lesson=  require('../models/Lesson');
const { mulipleMongooseToObject } = require('../../until/mongoose')
const { mongooseToObject } = require('../../until/mongoose')

//funtion constructor
class KhoahocController {
    // GET /news
    // index(req, res){
    //     res.render('khoahoc');
    // }

    async index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('khoahoc', {
                    courses: mulipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),  courseId: req.params.id
                    
                });
            })
            .catch(next);
    }

    //GET /new/:slug
    // show(req, res) {
    //     res.send("NEW DETAIL!!!")

    // }
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })  //TRUYỀN DỮ LIỆU QUA course
            })
            .catch(next);
    }


    // /courses/:slug
    view(req, res, next) {
        Lesson.find({courseID:req.params.slug})
            .then(lessons => {
                res.render('courses/view', {
                    lessons: mulipleMongooseToObject(lessons), slug_c:req.params.slug
                });
            })
            .catch(next);
    }


    

    //[GET] /courses/create
    create(req, res, next) {
        // res.send("COURSE CREARTE");
        res.render('courses/create');
    }
    //[POST] /courses/store
    store(req, res, next) {
        // res.json(req.body);
        // res.render('courses/store');
        const formData = req.body;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/courses'))
            .catch(error => {

            });
        // res.send("Course Save");
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}
//khởi tạo controller
module.exports = new KhoahocController;