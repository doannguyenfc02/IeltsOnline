const express = require('express');


const router = express.Router();

const examController=require('../app/controllers/ExamController');
const lessonController=require('../app/controllers/LessonController');


//newsController.index
// router.get('/:slug', khoahocController.show);

router.get('/create',examController.create);
router.post('/store', examController.store);  //lưu câu hỏi
router.get('/exam', examController.exam);  //tạo bài kiểm tra



router.get('/',examController.index);
module.exports=router;