// ===========target=========
// 1. create a folder with command. -C
// 2. create a writing file. Extra writing file
// 3. update content. - Update
// 4. read content from file - Read
// 5. rename file name - extra
// 6. delete file - Delete


const fs = require("fs");

// ===========create folder===========
// fs.mkdirSync("CRUD-Folder");

// ============create file in CRUD-Folder============
// fs.writeFileSync("CRUD-Folder/data.txt", "Creating data.txt file");

// ===========update content without override============
// fs.appendFileSync("CRUD-Folder/data.txt", ", Now just update some new content");


// ============read content from file without buffer data===============
// const readData = fs.readFileSync("CRUD-Folder/data.txt", "utf-8");
// console.log(readData);

// ==========rename file name=============
// fs.renameSync("CRUD-Folder/data.txt", "CRUD-Folder/readWrite.txt");

// ==========delete file=======(when we delete file then just used unlink)
// fs.unlinkSync("CRUD-Folder/readWrite.txt");

// ========delete folder===(when we delete folder then just used rmdir)====
fs.rmdirSync("CRUD-Folder");