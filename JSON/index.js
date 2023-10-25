const fs = require("fs");


// ============target============
// 1. first create orignal object 
// 2. convert obj to json 
// 3. show json data in a seperate file 
// 4. read data from json file 
// 5. again convert orginal data(obj)

// ==========first create orignal object ==========
const myBio = {
    name: "Sohel Rana",
    age: 22,
    education: "Varendra University",
    sub: "CSE",
}


// ==============convert obj to json===========
const jsonData = JSON.stringify(myBio);
// console.log(jsonData);
// output:
// { "name": "Sohel Rana",
//   "age": 22,
//   "education": "Varendra University",
//   "sub": "CSE" 
// }


// =============show json data in a seperate file ==========
// fs.writeFile("jsonFile.json", jsonData, (err) =>{
//     // console.log("file create done");
// })



// ==============read data from json file================
// fs.readFile("jsonFile.json", "utf-8", (err, data) =>{
//     // console.log(data);
// })
// ============read data from json(output)=========
// {
//     "name": "Sohel Rana",
//     "age": 22,
//     "education": "Varendra University",
//     "sub": "CSE"
// }


// ===========again convert orginal data(obj)===========
fs.readFile("jsonFile.json", "utf-8", (err, data) => {
    // console.log(data);
    const orgObj = JSON.parse(data);
    console.log(orgObj);
})
// ===========again convert orginal data(obj)(output)===========
// {
//     name: 'Sohel Rana',
//     age: 22,
//     education: 'Varendra University',
//     sub: 'CSE'
//   }