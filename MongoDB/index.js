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

// =========how to check active database===========
// command 
// db 

// output 
// your active database

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
//     {
//       _id: ObjectId("653feea2efc708dd052a8065"),
//       name: 'Feroz Kobir',
//       age: 27,
//       sub: 'BBA',
//       active: true
//     }

// ]


// ==========read specific value from collections=========
// command 
// db.collectionDataName.find({query: "valueName"});

// example 
// db.employeeData.find({name: "Sohel Rana"}).pretty()

// output 
// [
//     {
//       _id: ObjectId("653fdb9358cc65f42f086b4c"),
//       name: 'Sohel Rana',
//       age: 21,
//       sub: 'CSE'
//     }
// ]



// ==========read specific value from collections (only name)=========
// command 
// db.collectionDataName.find({query: "valueName"}, projection);

// example 
// db.employeeData.find({name: "Sohel Rana"}, {name: 1}).pretty()

// output 
// [
//     {
//       _id: ObjectId("653fdb9358cc65f42f086b4c"),
//       name: 'Sohel Rana',
//     }
// ]




// ==========read specific value from collections (only name)
//  without id also=========
// command 
// db.collectionDataName.find({query: "valueName"}, projection);

// example 
// db.employeeData.find({name: "Sohel Rana"}, {_id: 0, name: 1}).pretty()

// output 
// [
//     {
//       name: 'Sohel Rana',
//     }
// ]



// ==========read without specific value from collections =========
// command 
// db.collectionDataName.find({query: "valueName"}, projection);

// example 
// db.employeeData.find({name: "Sohel Rana"}, {name: 0}).pretty()

// output 
// [{
//     _id: ObjectId("653fdb9358cc65f42f086b4c"),
//     age: 21, sub: 'CSE'
// }]



// ===========how to filtering in collention========
// command 
// db.employeeDataName.find({query: "valueName"}).pretty()

// example 
// db.employeeData.find({active: ture}).pretty()

// output 
// [
//     {
//       _id: ObjectId("653feea2efc708dd052a8065"),
//       name: 'Feroz Kobir',
//       age: 27,
//       sub: 'BBA',
//       active: true
//     },
//     {
//       _id: ObjectId("653fef5defc708dd052a8066"),
//       name: 'Nazmus Sakib',
//       age: 23,
//       sub: 'Animal Husbandy',
//       active: true
//     }
//   ]


// =========filter your data from collection with only one data==========
// command 
// db.employeeDataName.find({query: "valueName"}).pretty().limit()

// example 
// db.employeeData.find({active: ture}).pretty().limit(1)

// output 
// [
//     {
//       _id: ObjectId("653feea2efc708dd052a8065"),
//       name: 'Feroz Kobir',
//       age: 27,
//       sub: 'BBA',
//       active: true
//     }
// ]




// =========filter your data from collection with only one data (another method)==========
// command 
// db.employeeDataName.find({query: "valueName"})

// example 
// db.employeeData.findOne({active: ture})

// output 
// {
//     _id: ObjectId("653feea2efc708dd052a8065"),
//     name: 'Feroz Kobir',
//     age: 27,
//     sub: 'BBA',
//     active: true
// }



// =========filter your data from collection with only one data skip first field==========
// command 
// db.employeeDataName.find({query: "valueName"}).pretty().limit(1).skip(1)

// example 
// db.employeeData.find({active: ture}).pretty().limit(1).skip(1)

// output 
// [
//     {
//       _id: ObjectId("653fef5defc708dd052a8066"),
//       name: 'Nazmus Sakib',
//       age: 23,
//       sub: 'Animal Husbandy',
//       active: true
//     }
//   ]



