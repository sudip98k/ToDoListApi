const express = require('express');
const router=express.Router();
//Destructuring the require method from todo 
const {createTask,updateTask,deleteTask,getTask} =require('../controllers/todoController');
const auth = require('../config/middleware');
//Setting up the route for the task and as well as the passing the auth middleware
//as the Authorization
    router.post('/create-task',auth,createTask);
    router.put('/:id',auth,updateTask);
    router.delete('/:id',auth,deleteTask);
    router.get('/:id',auth,getTask);


module.exports = router;