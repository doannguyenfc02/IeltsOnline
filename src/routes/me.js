const express = require('express');


const router = express.Router();

const meController=require('../app/controllers/MeController');
const lessonController=require('../app/controllers/LessonController');


//newsController.index
// router.get('/:slug', khoahocController.show);
router.get('/stored/courses', meController.storedCourses);
router.get('/stored/lessons', meController.storedLessons);



module.exports=router;