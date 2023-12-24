const express = require('express');


const router = express.Router();

const examController=require('../app/controllers/ExamController');
const lessonController=require('../app/controllers/LessonController');


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
module.exports=router;