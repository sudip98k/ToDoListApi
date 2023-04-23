const jwt=require('jsonwebtoken');
const SECRET_KEY ="TODOAPI";
//setUp the auth function for bearer token authentication
const auth=(req,res,next)=>{
    try {
        let token=req.headers.authorization;
        if(token){
            token=token.split(" ")[1];
            //jwt verify method for verifying token and secret key
            let user=jwt.verify(token,SECRET_KEY);
            req.userId=user.id;
        }else{
            res.status(401).json({
                message:"Unauthorized user"
            })
        }
        next();
    } catch (error) {
        //if we have an error
        console.log(error);
        res.status(401).json({
            message:"Unauthorized user"
        })
    }
}
module.exports=auth;