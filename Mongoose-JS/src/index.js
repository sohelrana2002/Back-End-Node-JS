const mongoose = require("mongoose");

// ========connect with mongodb===========
mongoose.connect("mongodb://127.0.0.1:27017/employeeInfo")
.then(() => console.log('Connected!'))
.catch((err) => console.log(err));


/* schema: A mongoose schema defines the structureof the document default value, validator, etc... */


// -------------create Schema------------
const employeeInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    sub: String,
    active: Boolean
});

/*A model is a class with which we construct documents. */

// ----------create model----------
const EmployeeData = new mongoose.model("EmployeeData", employeeInfoSchema);


// ==========create document with only one data=============
// const createDocument = async () =>{
//     try{
//         const officeEmployeeData = new EmployeeData({
//             name: "Sohel Rana",
//             age: 21,
//             sub: "CSE",
//             active: true
//         });

//         const result = await officeEmployeeData.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// };

// createDocument();


// ==========create document with multiple data============
// const createDocument = async () =>{
//     try{
//         const sohelData = new EmployeeData({
//             name: "Sohel Rana",
//             age: 22,
//             sub: "CSE",
//             active: true
//         });

//         const fahimData = new EmployeeData({
//             name: "Fahim Rahman",
//             age: 20,
//             sub: "CSE",
//             active: true
//         });

//         const sakibData = new EmployeeData({
//             name: "Nazmus Sakib",
//             age: 22,
//             sub: "Animal Husbandy",
//             active: true
//         });

//         const result = await EmployeeData.insertMany([sohelData, fahimData, sakibData]);
//         console.log(result);

//     }catch(err){
//         console.log(err);
//     }
// };

// createDocument();


// ==========read data from database========
// const getDocument = async () =>{
//     const result = await EmployeeData.find();
//     console.log(result);
// };

// getDocument();
//  output
// [
//     {
//       _id: new ObjectId('6541524febc59178f26d3392'),
//       name: 'Sohel Rana',
//       age: 22,
//       sub: 'CSE',
//       active: true,
//       __v: 0
//     },
//     {
//       _id: new ObjectId('6541524febc59178f26d3393'),
//       name: 'Fahim Rahman',
//       age: 20,
//       sub: 'CSE',
//       active: true,
//       __v: 0
//     },
//     {
//       _id: new ObjectId('6541524febc59178f26d3394'),
//       name: 'Nazmus Sakib',
//       age: 22,
//       sub: 'Animal Husbandy',
//       active: true,
//       __v: 0
//     }
//   ]

// ==========read data from database (specific data)========
// const getDocument = async () =>{
//     const result = await EmployeeData.find({name: "Sohel Rana"});
//     console.log(result);
// };

// getDocument();

// output
// [
//     {
//       _id: new ObjectId('6541524febc59178f26d3392'),
//       name: 'Sohel Rana',
//       age: 22,
//       sub: 'CSE',
//       active: true,
//       __v: 0
//     }
//   ]
