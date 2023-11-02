const express = require("express");
require("./db/connection");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 5000;


// app.get("/", (req, res) =>{
//     res.send("from home page ")
// });

app.post("/student-registration", (req, res) =>{
    res.send("Student Registration page");
});

app.listen(port,"192.168.43.189", () =>{
    console.log(`Listen from port ${port}`);
});
