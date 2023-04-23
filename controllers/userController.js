const User = require('../models/User');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');
const SECRET_KEY ="TODOAPI";
//This is for user register controller functionality
module.exports.register=async function(req,res){
    const {username,email,password} = req.body;
    try {
        //fincding user for registration with email
        const existingUser = await User.findOne({email:email});
        //if user already exist
        if(existingUser){
            return  res.status(400).json({
                message:"user already registered"
             })   
        }
        //user not exist then create hashed password 
        const hashedPassword =await bcrypt.hash(password,10);

        const result=await User.create({
            username:username,
            email:email,
            password:hashedPassword
        });
        //sign the user in jwt.sign() method using payload and secret key
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
//This is for user signIn method functionality
module.exports.signIn =async function(req,res){
    const {email,password} = req.body;
    try {
        
        const existingUser=await  User.findOne({email: email});
        if(!existingUser){
            return res.status(404).json({
                message: "User not found"
            })
        }
        //compare the existing password with the new password
        const matchPassword =await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({
                message:"Invalid password/email"
            })
        }
        //sign with the token and return
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