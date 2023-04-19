const express = require('express');
const router=express.Router();

const {createTask,updateTask,deleteTask,getTask} =require('../controllers/todoController');

router.route('/').post(createTask);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);
router.route('/:id').get(getTask);
module.exports = router;