//Examcontroller.js
const e = require('express');


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
    
        // Lặp qua formData để trích xuất và lưu mỗi câu hỏi
        for (let key in formData) {
            if (formData.hasOwnProperty(key) && key.startsWith('text_')) {
                const questionNumber = key.split('_')[1];
    
                const questionData = {
                    text: formData[key],
                    options: [
                        formData[`options0_${questionNumber}`],
                        formData[`options1_${questionNumber}`],
                        formData[`options2_${questionNumber}`],
                        formData[`options3_${questionNumber}`]
                    ],
                    correctOption: formData[`correctOption_${questionNumber}`]

                };
            
                const q = new Question(questionData);
                q.save()
                    .then(() => console.log(`Câu hỏi ${questionNumber} đã được lưu thành công`))
                    .catch(error => console.error(`Lỗi khi lưu câu hỏi ${questionNumber}: ${error}`));
            }
        }
    
        // Chuyển hướng hoặc phản hồi theo cần thiết
        res.redirect('/exam');
    }
    insertfile(req, res, next) {
        res.render('Exam/insertfile');
    }

    insertfilestore(req, res, next) {
        const formData = req.body;
    
        // Lặp qua formData để trích xuất và lưu mỗi câu hỏi
        for (let key in formData) {
            if (formData.hasOwnProperty(key) && key.startsWith('text_')) {
                const questionNumber = key.split('_')[1];
    
                const questionData = {
                    text: formData[key],
                    options: [
                        formData[`options0_${questionNumber}`],
                        formData[`options1_${questionNumber}`],
                        formData[`options2_${questionNumber}`],
                        formData[`options3_${questionNumber}`]
                    ],
                    correctOption: formData[`correctOption_${questionNumber}`]

                };
            
                const q = new Question(questionData);
                q.save()
                    .then(() => console.log(`Câu hỏi ${questionNumber} đã được lưu thành công`))
                    .catch(error => console.error(`Lỗi khi lưu câu hỏi ${questionNumber}: ${error}`));
            }
        }
    
        // Chuyển hướng hoặc phản hồi theo cần thiết
        res.redirect('/exam');
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


    async uploadFile(req, res, next) {
        try {
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }

            // Đọc dữ liệu từ file Excel
            const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const excelData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

            // Loại bỏ hàng tiêu đề
            excelData.shift();

            // Tạo các trường input cho câu hỏi dựa trên dữ liệu từ file Excel
            const questionDivs = excelData.map((rowData, index) => {
                const questionNumber = index + 2;

                return `
                    <div id="question${questionNumber}" class="form-group">
                        <textarea name="text_${questionNumber}" placeholder="Nhập câu hỏi">${rowData[0]}</textarea><br>
                        <input type="radio" name="correctOption_${questionNumber}" value="a"> a) <input type="text" name="options0_${questionNumber}" value="${rowData[1]}" required><br>
                        <input type="radio" name="correctOption_${questionNumber}" value="b"> b) <input type="text" name="options1_${questionNumber}" value="${rowData[2]}" required><br>
                        <input type="radio" name="correctOption_${questionNumber}" value="c"> c) <input type="text" name="options2_${questionNumber}" value="${rowData[3]}" required><br>
                        <input type="radio" name="correctOption_${questionNumber}" value="d"> d) <input type="text" name="options3_${questionNumber}" value="${rowData[4]}" required><br>
                        <button type="button" class="btn btn-danger" onclick="removeQuestion(${questionNumber})">Xóa</button>
                    </div>
                `;
            });

            // Gửi mã HTML về client để hiển thị trên form
            res.send(questionDivs.join(''));
        } catch (error) {
            console.error('Error processing file:', error);
            res.status(500).send('Error processing file.');
        }
    }


 

}

module.exports = new ExamController;
