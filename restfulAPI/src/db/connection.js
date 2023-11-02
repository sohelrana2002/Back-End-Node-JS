const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/student-api")
.then(() =>{
    console.log("Connected with mongoose");
})
.catch((err) =>{
    console.log("Mongoose connection errer");
});