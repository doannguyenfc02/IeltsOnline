

const Course = require('../models/Course');
const Lesson=  require('../models/Lesson');
const { mulipleMongooseToObject } = require('../../until/mongoose')
const { mongooseToObject } = require('../../until/mongoose')

//funtion constructor
class LessonController {
 
    //  /courses
    async index(req, res, next) {
        res.render('khoahoc')
    }
    viewLesson(req, res, next){
        Lesson.findOne({_id: req.params.id })
        .then(lesson => {
            res.render('lesson/lesson', { lesson: mongooseToObject(lesson) })  //TRUYỀN DỮ LIỆU QUA course
        })
        .catch(next);
    }

    //[POST] /courses/store
    store(req, res, next) {
            // res.json(req.body);
            // res.render('courses/store');
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;            
            const lesson = new Lesson(formData);
            lesson.save()
                .then(() => res.redirect(`/courses/${req.params.slug}`))
                .catch(error => {
    
                });
            // res.send("Course Save");
        }

        // store(req, res, next) {
        //     const formData = req.body;
        //     formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        //     formData.courseID=`${req.params.slug}`;
        //     const lesson = new Lesson(formData);
        //     lesson.save()
        //         .then(() => res.redirect(`/courses/${req.params.slug}`))
        //         .catch(error => {
    
        //         });
    
        // }


    //[GET] /courses/create
    create(req, res, next) {
            // res.send("COURSE CREARTE");
            res.render('lesson/createLesson',{
                slug:req.params.slug
            });
            // res.send(`${req.params.slug}`);
    }

    edit(req, res, next) {
        // res.send("LE Save");
        Lesson.findById(req.params.id)
            .then(lesson => {
                res.render('lesson/editLesson', {
                    lesson: mongooseToObject(lesson),  slug_c: req.params.slug
                });
            })
            .catch(next);
    }
    update(req, res, next) {
        console.log(req.params.id);
        Lesson.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect(`/courses/${req.params.slug}`))
            .catch(next);
    }





    // [DELETE] /courses/lesson/:id
    destroy(req, res, next) {
        Lesson.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }


   
}
//khởi tạo controller
module.exports = new LessonController;