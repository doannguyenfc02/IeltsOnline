const express = require('express');


const router = express.Router();


const ManagementConntroller = require('../app/controllers/ManagementConntroller');


router.get('/stored-users', ManagementConntroller.index);
router.get('/users/create', ManagementConntroller.create);
router.post('/users/store', ManagementConntroller.store);

router.get('/users/:id/edit', ManagementConntroller.edit);
router.put('/users/:id', ManagementConntroller.update);
router.delete('/users/:id', ManagementConntroller.destroy);




module.exports=router;