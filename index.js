const express=require('express');
const port=5000;
const db=require('./config/mongoose');
const todoRoute=require('./routes/todo');
const userRoute=require('./routes/user');
//Fire the express server
const app = express();
//convert req.body into jason format
app.use(express.json());


app.use('/api/task',todoRoute);
app.use('/api/user',userRoute);

app.listen(port,(err)=>{
    if(err){
        console.log('err');
        return;
    }
    console.log(`server listening on port ${port}`);
});