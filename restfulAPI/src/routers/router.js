const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


// =========create user data========
router.post("/student-registration", async(req, res) =>{
    // console.log(req.body);
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        // console.log(createUser);
        if(!createUser){
            res.status(404).send();
        }else{
            res.status(201).send(createUser);
        };
    }catch(err){
        res.status(404).send(err);
    }

    // res.send("Student Registration page");
});


// =========read/get users data==========
router.get("/student-registration", async(req, res) =>{
    try{
        const getUsers = await Student.find();
        if(!getUsers){
            res.status(404).send();
        }else{
            res.status(201).send(getUsers);
        }
    }catch(err){
        res.status(404).send(err);
    }
});

// ========read/get user data(individual with id)=======
router.get("/student-registration/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        // =======getUser singular for only id======
        const getUser = await Student.findById(_id);
        if(!getUser){
            res.status(404).send();
        }else{
            res.status(201).send(getUser);
            // console.log(getUser);
        }
    }catch(err){
         res.status(404).send(err);
    }
});

// // ========read/get user data(individual with name)=======
// router.get("/student-registration/:name", async (req, res) =>{
//     try{
//         const name = req.params.name;
//         const getName = await Student.find(name);
//         res.send(getName);
//         console.log(getName);
//     }catch(err){
//         res.send(err);
//     } 
// });


// =======update user data though id=======
router.patch("/student-registration/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const updateUser = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });

        if(!updateUser){
            res.status(404).send();
        }else{
            res.status(201).send(updateUser);
        }
    }catch(err){
        res.status(404).send(err);
    }
});

// ========delete user data though by id===========
router.delete("/student-registration/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const deleteUser = await Student.findByIdAndDelete(_id);

        if(!deleteUser){
            res.status(404).send();
        }else{
            res.status(201).send(deleteUser);
        }
    }catch(err){
        res.status(404).send(err);
    }
});


module.exports = router;
