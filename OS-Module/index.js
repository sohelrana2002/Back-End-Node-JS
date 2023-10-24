// =============get os module from node js============
const os = require('node:os');


// =========get arch from os=============
// console.log(os.arch());

// ====== working with (os.cpus) (Returns an array of objects containing information about each logical CPU core.The array will be empty if no CPU information is available, such as if the / proc file system is unavailable.)=====
// console.log(os.cpus());

// ====== working with (os.freemem()) (Returns the amount of free system memory in bytes as an integer.) (RAM)=====
// const freeMemory = os.freemem();
// console.log(`${freeMemory / 1024 / 1024 / 1024}`);

// =====get host name===========
// console.log(os.hostname());

// ======get os.platform=====
console.log(os.platform());