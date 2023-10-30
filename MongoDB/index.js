// ==========how to check database======

// command
// show dbs

// output
// admin      40.00 KiB
// config    108.00 KiB
// local      40.00 KiB

// ==============how to create collections=========
// command 
// use collectionsNmae

// example 
// use employee 

// output
// switched db to employee 


// ===========how to switched in collection directory=======
// command 
// db collectionName
// example
// db employee

// output
// switched on db employee

// ==========how to insert one data in collection=========
// command 
//db.collectionData.insertOne({});

// example 
// db.employeeData.insertOne({name: "Sohel Rana", age: 21, shift: "Night"})

// output
// {
//     acknowledged: true,
//     insertedId: ObjectId("653fe55aefc708dd052a8062")
// }


// ==========how to insert multiple data in collection=========
// command 
//db.collectionData.insertMany({});

// example 
// db.employeeData.insertMnay([{name: "Sohel Rana", age: 21, shift: "Night"},{name: "Fahim Rahman", age: 20, sub: "EEE"}])

// output
// {
//     acknowledged: true,
//     insertedIds: {
//       '0': ObjectId("653fe5f9efc708dd052a8063"),
//       '1': ObjectId("653fe5f9efc708dd052a8064")
//     }
// }




// ==========how to read data from database collection===========
// command 
//db.collectionDataName.find().pretty().----pretty() work like json format

// example 
// db.employeeData.find().pretty()

// output 
// [
//     {
//         _id: ObjectId("653fdb9358cc65f42f086b4c"),
//         name: 'Sohel Rana',
//         age: 21,
//         sub: 'CSE'
//     },
//     {
//         _id: ObjectId("653fe19aefc708dd052a8060"),
//         name: 'Fahim Rahman',
//         age: 20,
//         sub: 'bba'
//     },
//     {
//         _id: ObjectId("653fe19aefc708dd052a8061"),
//         name: 'Ratul Bro',
//         age: 65,
//         sub: 'English'
//     },
//     {
//         _id: ObjectId("653fe55aefc708dd052a8062"),
//         name: 'Danddy',
//         age: 30,
//         sub: 'Cse'
//     },

// ]



