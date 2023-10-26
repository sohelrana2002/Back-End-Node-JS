const express = require("express");
const app = express();
const PORT = 5000;


app.get("/", (req, res) =>{
    res.send("Welcome to Home page");
});

app.get("/about", (req, res) =>{
    res.send("Welcome to About page");
});

app.get("/skills", (req, res) =>{
    res.send("Welcome to Skills page");
});
app.get("/contact", (req, res) =>{
    res.send("Welcome to Contact page");
});


app.listen(PORT, "192.168.0.103", () =>{
    console.log(`Listenting from post ${PORT}`);
})