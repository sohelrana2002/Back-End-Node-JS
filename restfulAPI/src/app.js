const express = require("express");
require("./db/connection");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());


// app.get("/", (req, res) =>{
//     res.send("from home page ")
// });

app.post("/student-registration", async(req, res) =>{
    console.log(req.body);
    try{
        const user = new Student(req.body);
        const userData = await user.save();
        console.log(userData);
        res.status(201).send(userData);
    }catch(err){
        res.status(404).send(err);
    }

    // res.send("Student Registration page");
});

app.listen(port,"192.168.43.189", () =>{
    console.log(`Listen from port ${port}`);
});
