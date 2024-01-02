// rotes/exam.js

const express = require('express');

const multer = require('multer');
const xlsx = require('xlsx');
// Cấu hình cho việc lưu trữ file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })


const router = express.Router();

const examController=require('../app/controllers/ExamController');
const lessonController=require('../app/controllers/LessonController');


const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);



//newsController.index
// router.get('/:slug', khoahocController.show);

router.get('/create',examController.create);
router.post('/store', examController.store);  //lưu câu hỏi

router.get('/insertfile',examController.insertfile);
router.post('/filestore', examController.insertfilestore);  //lưu câu hỏi


router.get('/:id/edit', examController.edit);
router.put('/:id', examController.update);


router.delete('/:id', examController.destroy);

router.get('/',examController.index);

router.post('/filestore', upload.single('excelFile'), examController.uploadFile);






module.exports=router;