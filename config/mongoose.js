const mongoose = require('mongoose');


//Method for connecting Db
mongoose.connect('mongodb://127.0.0.1/ToDoListApi', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});