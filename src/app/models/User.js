//app/models/User.js
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
// const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);


const Schema = mongoose.Schema;
//Định nghĩa các trường làm việc với DB
const User = new Schema({
    fullname: { type: String, require: true },
    email: { type: String, require: true , unique: true},
    username: { type: String, require: true , unique: true},
    password: { type: String, require: true},
 
    role: { type: String, enum: ['user', 'teacher', 'manager', 'admin'], default: 'user' },
},{
    timestamps:true, 
});



module.exports = mongoose.model('User', User);