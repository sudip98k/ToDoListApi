const User = require('../models/User');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');
const SECRET_KEY ="TODOAPI";

module.exports.register=async function(req,res){
    const {username,email,password} = req.body;
    try {
        const existingUser = await User.findOne({email:email});
        if(existingUser){
            return  res.status(400).json({
                message:"user already registered"
             })   
        }
        const hashedPassword =await bcrypt.hash(password,10);

        const result=await User.create({
            username:username,
            email:email,
            password:hashedPassword
        });

        const token=jwt.sign({email:result.email,id:result._id},SECRET_KEY);
        res.status(201).json({
            user:result,
            token:token
        })

    } catch (error) {
        console.log("Error in registering user",error);
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports.signIn =async function(req,res){
    const {email,password} = req.body;
    try {
        
        const existingUser=await  User.findOne({email: email});
        if(!existingUser){
            return res.status(404).json({
                message: "User not found"
            })
        }
        const matchPassword =await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({
                message:"Invalid password/email"
            })
        }
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY);
        res.status(201).json({
            user:existingUser,
            token:token
        })
        
    } catch (error) {
        console.log("Error in registering user",error);
        res.status(500).json({
            message:error.message
        })
    }
}