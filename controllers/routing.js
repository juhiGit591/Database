const express = require('express');
const mongoose = require('mongoose');
const { route } = require('./search');

const router = express.Router();
const projectModel =  mongoose.model("project");
const searchController = require("./search");
const updateController = require("./update");
router.get("/",(req,res)=>{

    res.send("Router");
})

router.get("/add",(req,res)=>{

    res.render("addCourse");
})

router.post("/add",(req,res)=>{
    
    var project = new projectModel();
    project.id = req.body.id;
    project.name = req.body.name;
    project.date = req.body.date;
    project.manner_of_death = req.body.manner_of_death;
    project.save((err,docs) => {
            if(!err){
                res.redirect("/routing/list");
            }
            else{
                res.send(err);
            }
    });
  
    
});



router.get("/list",async(req,res)=>{
 await projectModel.find((err, docs)=>{ 
    if(!err){
        res.render("list",{data :docs});
        console.log(docs);
    }
    else{
        res.send(err);
    }
 })});

router.use("/search",searchController);
router.use("/update",updateController);


module.exports = router;