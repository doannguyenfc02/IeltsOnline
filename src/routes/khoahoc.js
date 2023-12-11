const express = require('express');


const router = express.Router();

const khoahocController=require('../app/controllers/KhoahocController');
const lessonController=require('../app/controllers/LessonController')
// const lessonRouter=require('./lesson')



//newsController.index
// router.get('/:slug', khoahocController.show);




router.get('/create', khoahocController.create);
router.post('/store', khoahocController.store);
router.get('/:id/edit', khoahocController.edit);
router.put('/:id', khoahocController.update);
router.patch('/:id/restore', khoahocController.restore);
router.delete('/:id', khoahocController.destroy);
router.delete('/:id/force', khoahocController.forceDestroy);







router.get('/:slug/:id/edit-lesson', lessonController.edit);
router.get('/:slug/create-lesson', lessonController.create);
router.get('/:slug/:id/view', lessonController.viewLesson);
router.put('/:slug/:id/', lessonController.update);



// router.post('/cc/store', lessonController.store);
router.post('/:slug/store', lessonController.store);
router.delete('/lesson/:id', lessonController.destroy);




router.get('/:slug', khoahocController.view);

// router.get('/:slug', khoahocController.show);

router.get('/', khoahocController.index);
module.exports=router