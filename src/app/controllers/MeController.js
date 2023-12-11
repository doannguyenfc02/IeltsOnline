const Course = require('../models/Course');
const Lesson = require('../models/Lesson');

const { mulipleMongooseToObject } = require('../../until/mongoose')
const { mongooseToObject } = require('../../until/mongoose')

//funtion constructor
class MeController {

    //  me/stored/courses
    async storedCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', {
                    courses: mulipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    //  me/stored/courses
    async storedLessons(req, res, next) {
        Lesson.find({})
            .then(lessons => {
                res.render('me/stored-lessons', {
                    lessons: mulipleMongooseToObject(lessons)
                });
            })
            .catch(next);
    }




}
//khởi tạo controller
module.exports = new MeController;