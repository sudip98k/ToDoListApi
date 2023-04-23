
//My ToDo Model
const mongoose = require('mongoose');

const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    desc:{
        type:String
    },
    
    active:{
        type:Boolean,
        default:true,
    }
},{
    timestamps:true
});

const Todo=mongoose.model('Todo',todoSchema);
module.exports = Todo;