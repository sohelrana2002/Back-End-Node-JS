// ==========target===========
// 1. create a server 
// 2. reading from a stream 
// 3. create a readable stream 
// 4. handle stream events- data, error, end


const fs = require("fs");
const http = require("http");


// -----------create server------------
const server = http.createServer();

// ------------send request for data in server----------
server.on("request", (req, res) =>{
    // -------create readable stream----------
    const rStream = fs.createReadStream('input.txt');

    rStream.on("data", (chunkDta) =>{
        res.write(chunkDta);
    });
    rStream.on("end", () =>{
        res.end();
    });
    rStream.on("error", (err) =>{
        res.end(`file not found \n${err}`)
    })

});

server.listen(2000, "192.168.0.103");