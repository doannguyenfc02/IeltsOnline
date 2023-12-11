const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
// const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);


const Schema = mongoose.Schema;
//Định nghĩa các trường làm việc với DB
const Exam = new Schema({
    name: { type: String, maxLength: 255, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true},
    videoID: { type: String, maxLength: 255 , require: true}, 
    courseID: { type: String, maxLength: 255 , require: true}, 
},{
    timestamps:true, 
});


module.exports = mongoose.model('Exam', Exam);

