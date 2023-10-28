const express = require("express");
const path = require("path");
const app = express();


// console.log(app);
// ---------express js have lot of method----
// ----method work with like that---
// get(route, callback);
/*mosly work with operation like that(CRUD)
1. API 
2. get- read
3. post- create new data
4. put - update data
5. delete - delete your data
*/
// ===========always used absulate path in express js============


// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

// =======serve static page though bulting middleware======
app.use(express.static(staticPath))


// ----------create routing-----------
app.get("/", (req, res) =>{
    res.send("Hello from the express home page")
});

app.get("/about", (req, res) =>{
    res.send("This is about page from express")
});


// ==========work with json data==============
app.get("/tempature", (req, res) =>{
    res.send({
        currentTemp: "26C",
        previousDay: "24C"
    });
});

// ==========work with array with object==============
app.get("/student", (req, res) =>{
    res.send([
        {
            id: 1,
            name: "Sohel Rana",
            dept: "CSE",
            sec: "B"
        },
        {
            id: 2,
            name: "Fahim Rahman",
            dept: "EEE",
            sec: "A"
        },
    ]);
});


// ==========work with array with object(json method)==============
app.get("c", (req, res) =>{
    res.json([
        {
            id: 1,
            name: "Sohel Rana",
            dept: "CSE",
            sec: "B"
        },
        {
            id: 2,
            name: "Fahim Rahman",
            dept: "EEE",
            sec: "A"
        },
    ]);
});

/*Uing res.json() method have some benifits like non-object, null, undefined and not valid json to convert the valid json*/




app.listen(2000, "192.168.0.102", () =>{
    console.log("Listing from port 2000");
});


