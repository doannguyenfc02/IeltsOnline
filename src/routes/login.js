const express = require('express');


const router = express.Router();

const newsController=require('../app/controllers/LoginController');
const LoginController = require('../app/controllers/LoginController');


router.post('/:username', LoginController.login);
router.get('/', LoginController.index);



module.exports=router;