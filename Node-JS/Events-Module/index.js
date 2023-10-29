// =================target=================
// 1. create class though node js events module 
// 2. create object from class 
// 3. emit your event name
// 4. create own events
// 5. make it possiable 

// =========create class though node js events module =============
const EventEmitter = require("events");


// ==========create object from class ===========
const event = new EventEmitter();


// =======on working as a addEventListener in node js=========

// =======create own events(with callback function)==========
// event.on("setMyName", () =>{
//     console.log("My name is Sohel Rana");
// });

// create own events(define as a param)
// const handleEvent = () =>{
//     console.log("My name is Sohel Rana");
// }
// event.on("setMyName", handleEvent);


// =========emit your event name(first emit then define)======
// event.emit("setMyName");




// ====one function but multiple used----------
// event.on("myBio", () =>{
//     console.log("My name is Sohel Rana");
// });

// event.on("myBio", () =>{
//     console.log("I'm from Rajshahi, Bangladesh");
// });

// event.on("myBio", () =>{
//     console.log("Studies at Varendra University");
// });



// ======emit once and used everywhere=======
// event.emit("myBio");



// ===========create checkpage events==========
event.on("checkPage", (code, msg) =>{
    console.log(`Your status code is ${code}`);
    console.log(`Your message is ${msg}`);
})




// --------param wise events==
event.emit("checkPage", 200, "ok");
