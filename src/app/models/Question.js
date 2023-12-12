const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
  text: { type: String },
  options: [{ type: String }],
  correctOption: { type: String}
});

module.exports = mongoose.model('Question', Question);
