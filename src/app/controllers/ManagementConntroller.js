//controler/LoginController.js

const Course = require('../models/Course');
const Lesson = require('../models/Lesson');
const User = require('../models/User');
const { mulipleMongooseToObject } = require('../../until/mongoose')
const { mongooseToObject } = require('../../until/mongoose')

//funtion constructor
class ManagementConntroller {
    index(req, res, next) {
        User.find({})
            .then(users => {
                res.render('management/store-users', {
                    users: mulipleMongooseToObject(users)
                });
            })
            .catch(next);
    }
    //[GET] /manager/user/create
    create(req, res, next) {
        // res.send("COURSE CREARTE");
        res.render('users/create', {
            slug: req.params.slug
        });
        // res.send(`${req.params.slug}`);
    }
    //[POST] /manager/user/store
    store(req, res, next) {
        // res.json(req.body);
        // res.render('courses/store');
        const formData = req.body;
        const user = new User(formData);
        user.save()
            .then(() => res.redirect('/management/stored-users'))
            .catch(error => {

            });

    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        User.findById(req.params.id)
            .then(user => {
                res.render('users/edit', {
                    user: mongooseToObject(user), userId: req.params.id

                });
            })
            .catch(next);
    }
    update(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/management/stored-users'))
            .catch(next);
    }

    // [DELETE] /users/:id
    destroy(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }





}
//khởi tạo controller
module.exports = new ManagementConntroller;