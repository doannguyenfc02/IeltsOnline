const express = require('express');


const router = express.Router();

const LessonController=require('../app/controllers/LessonController');
const { route } = require('./news');




//newsController.index
// router.get('/:slug', khoahocController.show);

// lesson/create
router.get('/create', LessonController.create);
router.get('/', LessonController.index);



module.exports=router;