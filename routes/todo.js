const express = require('express');
const router=express.Router();

const {createTask,updateTask,deleteTask,getTask} =require('../controllers/todoController');
const auth = require('../config/middleware');

// router.route('/').post(createTask);
// router.route('/:id').put(updateTask);
// router.route('/:id').delete(deleteTask);
// router.route('/:id').get(getTask);

    router.post('/create-task',auth,createTask);
    router.put('/:id',auth,updateTask);
    router.delete('/:id',auth,deleteTask);
    router.get('/:id',auth,getTask);


module.exports = router;