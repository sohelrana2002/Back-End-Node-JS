// ========access file-system though node js==========
const fs = require('fs');

// =========write in a file ===========
// fs.writeFileSync("write.txt", "First writing file in node js");

// =======same file and override content==============
// fs.writeFileSync("write.txt", "Override the previous content");

// ========read from txt file=========
// const buf_data = fs.readFileSync("write.txt");
// console.log(buf_data);
// ====get result format in buffer--==========
{/* <Buffer 4f 76 65 72 72 69 64 65 20 74 68 65 20 70 72 65 76 69 6f 75 73 20 63 6f 6e 74 65 6e 74 > */ }

// ===========get orginal data===========
// const buf_data = fs.readFileSync("write.txt");
// const orginal_data = buf_data.toString();
// console.log(orginal_data);


// ==========rename file name===========
fs.renameSync("write.txt", "readWrite.txt");


