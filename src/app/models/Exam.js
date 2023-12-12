const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correctOption: {
        type: String,
        required: true
    }
});

const ExamSchema = new Schema({
    questionsData: {
        type: [QuestionSchema],
        required: true
    }
}, {
    timestamps: true
});

const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;
