const mongoose = require('mongoose');
const Todo=require('../models/ToDoModel');

module.exports.createTask=async function(req,res){
     const {task,desc,active}=req.body;
    const todo=await Todo.create({task,desc,active});
    res.status(200).json({
        success:true,
        data:todo,
        message:"Task is created successfully"
    })
}

module.exports.updateTask = async function(req,res){
    const {task,desc,active}=req.body;
    const TaskExist =await Todo.findOne({_id:req.params.id})
    if(TaskExist){
        TaskExist.task =task;
        TaskExist.desc =desc;
        TaskExist.active =active;
        const updateMyTask=await TaskExist.save();
        res.status(200).json({
            success:true,
            data:updateMyTask,
            message:"Task is updated successfully"
        })
    }else{
        res.status(401).json({
            success:false,
            data:null,
            message:"Task not found"
        })
    }
}


module.exports.deleteTask =async function(req,res){
    //const findId=await Todo.findById({_id:req.params.id});
    await Todo.deleteOne({_id:req.params.id}).then(function(result){
        res.status(200).json({
            success:true,
            data:result,
            message: 'Task deleted successfully'
        })
    }).catch(function(err){
        res.status(401).json({
            success:false,
            data:err.message,
            message:"Task not found"
        })
    })

}

module.exports.getTask =async function(req,res){
    const getTask =await Todo.findOne({_id:req.params.id});
    if(getTask){
        res.status(200).json({
            success:true,
            data:getTask
        })
    }else{
        res.status(404).json({
            success:false,
            data:null,
            message: 'Task not found'
        })
    }
}