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
//             name: "Danddy",
//             age: 60,
//             sub: "Bangla",
//             active: false
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
// ====select operator work how want type of data want to show===
// ===limit meand how much data want to show=======
// const getDocument = async () =>{
//     const result = await EmployeeData.find({sub: "CSE"})
//     .select({name: 1})
//     .limit(1);
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


// ==========Comparison Query Operators========
// $eq ---  Matches values that are equal to a specified value.
// $gt ---  Matches values that are greater than a specified value.
// $gte --- Matches values that are greater than or equal to a specified value.
// $in ---  Matches any of the values specified in an array.
// $lt ---  Matches values that are less than a specified value.
// $lte --- Matches values that are less than or equal to a specified value.
// $ne ---  Matches all values that are not equal to a specified value.
// $nin --- Matches none of the values specified in an array.

// The $eq operator has the following form:
// { <field>: { $eq: <value> } }

// example 

// const getDocument = async () =>{
//     const result = await EmployeeData.find({age: {$gt: 20}})
//     // .select({name: 1})
//     // .limit(1);
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
//     },
//     {
//       _id: new ObjectId('6541524febc59178f26d3394'),
//       name: 'Nazmus Sakib',
//       age: 22,
//       sub: 'Animal Husbandy',
//       active: true,
//       __v: 0
//     }
// ]



// ==========Logical Query Operators==============
// $and --Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// $not --Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor --Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
// $or --Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

// Syntax The $and has the following syntax:

// { $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] };

// example 
// const getDocument = async () =>{
//     const result = await EmployeeData.find({$and: [{age: {$gt: 19}}, {active: true}]})
//     // .select({name: 1})
//     // .limit(1);
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
  


// ==========count Documents================
// Syntax The $and has the following syntax:

// .countDocuments();
// example
// const getDocument = async () =>{
//     const result = await EmployeeData.find({$and: [{age: {$gt: 19}}, {active: true}]}).countDocuments()
//     // .select({name: 1})
//     // .limit(1);
//     console.log(result);
// };

// getDocument();
// output 
// 3



// =================sorting============
// Syntax The  $sort stage has the following prototype form:

// { $sort: { <field1>: <sort order>, <field2>: <sort order> ... } }

// 1 -  Sort ascending.
// -1 - Sort descending.
// { $meta: "textScore" } -Sort by the computed textScore metadata in descending order. See Text Score Metadata Sort for an example.


// ---ascending order with name--------
// const getDocument = async () =>{
//     const result = await EmployeeData.find().sort({age: 1})
//     // .select({name: 1})
//     // .limit(1);
//     console.log(result);
// };

// getDocument();


// output
// [
//     {
//       _id: new ObjectId('6541524febc59178f26d3393'),
//       name: 'Fahim Rahman',
//       age: 20,
//       sub: 'CSE',
//       active: true,
//       __v: 0
//     },
//     {
//       _id: new ObjectId('6541524febc59178f26d3392'),
//       name: 'Sohel Rana',
//       age: 22,
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
  






// ---decending order with name--------
// const getDocument = async () =>{
//     const result = await EmployeeData.find().sort({age: -1})
//     // .select({name: 1})
//     // .limit(1);
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
//     },
//     {
//       _id: new ObjectId('6541524febc59178f26d3394'),
//       name: 'Nazmus Sakib',
//       age: 22,
//       sub: 'Animal Husbandy',
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
//     }
//   ]
  





// -----------update documents===========
// const updateDocument = async (id) =>{
//     try{
//         const result = await EmployeeData.updateOne({_id: id}, {
//             $set: {
//                 name: "Dabddy Boy"
//             }
//         });
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }


// updateDocument("6542313a2b914737776d8026");


// ==========update dta and show in console with update value========
// const updateDocument = async (id) =>{
//     try{
//         const result = await EmployeeData.findByIdAndUpdate({_id: id}, {
//             $set: {
//                 name: "Dabddy Boy"
//             }
//         },{
//             new: true
//         });
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// updateDocument("6542313a2b914737776d8026");


// =============delete document=======
// const deleteDocument = async (_id) =>{
//     try{
//         const result = await EmployeeData.deleteOne({_id});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// deleteDocument("6542313a2b914737776d8026");

// ======delete document with show in console======
const deleteDocument = async (_id) =>{
    try{
        const result = await EmployeeData.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

deleteDocument("65423b263fef56a37e476d6e");