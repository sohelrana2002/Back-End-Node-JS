// =======get http server from node js=======

const http = require("http");
// console.log(http);
const url = require("url");
const fs = require("fs");

// ============create server========
const server = http.createServer((req, res) =>{
    const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8");

    const objDta = JSON.parse(data);

    console.log(objDta);


    // =======make different type of routing========
    if(req.url === "/"){
        res.end(objDta[0].name);
    }
    else if(req.url === "/about"){
        res.end("This is about page");
    }
    else if(req.url === "/services"){
        res.end("This is services page");
    }
    else if(req.url === "/contact"){
        res.end("This is contact page");
    }
    else{
        res.writeHead(200, { 'Content-Type': 'text/plain',
        'Trailer': 'Content-MD5' });
        res.end(" 404 page ");
    }
});

server.listen(2000, "192.168.0.103", () =>{
    console.log("Listening to the port no 7000");
})