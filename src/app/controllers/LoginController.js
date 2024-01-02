//controler/LoginController.js

const Course = require('../models/Course');
const Lesson = require('../models/Lesson');
const User = require('../models/User');

const { mulipleMongooseToObject } = require('../../until/mongoose')
const { mongooseToObject } = require('../../until/mongoose')
const jwt = require('jsonwebtoken');


const bcrypt = require('bcrypt');








//funtion constructor
class LoginController {
    index(req, res, next) {
        res.render('login');
        // req.session.errorMessage=null;

    }



    async login(req, res, next) {
        const { username, password } = req.body;

        User.findOne({ username: req.params.username })
            .then(user => {

                if (user.username != username || user.password != password) {
                    // req.session.errorMessage = 'Invalid username or password';
                    // req.session.errorMessage = 'Invalid username or password';

                    res.render('login');

                }
                else {
                    //Thông báo
                    // req.session.successMessage = 'Login successful!';

                    // Tạo token
                    const token = jwt.sign({ user: { userId: user._id, username: user.username } }, 'your-secret-key');

                    // Gửi token vào cookie
                    res.cookie('token', token, { httpOnly: true, maxAge: 86400000 }); // Sẽ hết hạn sau 1 ngày

                    res.redirect('back');
                }
            })
            .catch(error => {

                // req.session.errorMessage = 'Invalid username or password';
                res.redirect('/login');
                // console.error(error);
                // res.status(500).json({ message: 'Internal server error' });
            });


    }

















}
//khởi tạo controller
module.exports = new LoginController;