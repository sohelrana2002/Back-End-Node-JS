const express = require("express");
require("./db/connection");
const StudentRouter = require("./routers/router");
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(StudentRouter);

app.listen(port,"192.168.43.189", () =>{
    console.log(`Listen from port ${port}`);
});
