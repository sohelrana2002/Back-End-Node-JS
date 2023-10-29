// ==============CRUD OPERATION USING Async(callback function)=========
// ============target============
// 1. create a folder
// 2. create file
// 3. write file
// 4. update content
// 5. rename file
// 6. read file

const fs = require("fs");


// ==========create folder-==============
// fs.mkdir("CRUD-Async", (err) => console.log("Create folder successfully"));


// ==========create file===========
// fs.writeFile("CRUD-Async/data.txt", "New data.txt is created", (err) => {
//     console.log("Create file successfully")
// })


// =======update file content=============
// fs.appendFile("CRUD-Async/data.txt", ", update content without overriding.", (err) => {
//     console.log("update content successfully");
// });

// ===========rename file==========
// fs.rename("CRUD-Async/data.txt", "CRUD-Async/readWrite.txt", (err) => {
//     console.log("Rename file name successfully");
// });

// =============read file==========
fs.readFile("CRUD-Async/readWrite.txt", "utf-8", (err, data) => {
    // console.log(err);
    console.log(data);
});