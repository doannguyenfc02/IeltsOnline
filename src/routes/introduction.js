const express = require('express');

const router = express.Router();

const introductionController=require('../app/controllers/IntroductionController');

router.get('/', introductionController.index);

module.exports=router;
