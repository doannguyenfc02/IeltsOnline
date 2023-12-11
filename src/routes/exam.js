const express = require('express');


const router = express.Router();

const examController=require('../app/controllers/ExamController');
const lessonController=require('../app/controllers/LessonController');


//newsController.index
// router.get('/:slug', khoahocController.show);
router.get('/',examController.index);



module.exports=router;