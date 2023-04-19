const express = require('express');
const router=express.Router();

const {register,signIn}=require('../controllers/userController');

router.route('/register').post(register);
router.route('/login').post(signIn);

module.exports=router;