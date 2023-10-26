const express = require("express");
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

// ----------create routing-----------
app.get("/", (req, res) =>{
    res.send("Hello from the express home page")
});

app.get("/about", (req, res) =>{
    res.send("This is about page from express")
})

app.listen(2000, "192.168.0.103", () =>{
    console.log("Listing from port 2000");
});