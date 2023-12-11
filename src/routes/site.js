const express = require('express');
const router = express.Router();

const siteController=require('../app/controllers/SiteController');
const khoahocController=require('../app/controllers/KhoahocController')
const newsController=require('../app/controllers/NewsController')
//newsController.index
router.use('/search', siteController.search);
router.use('/khoahoc', khoahocController.index);
router.use('/news', newsController.index);
router.use('/:slug', siteController.not); //test
router.use('/', siteController.index);


module.exports=router;