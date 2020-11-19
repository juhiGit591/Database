const express = require('express');
const mongoose = require('mongoose');

const pie = express.Router();
const pieSchema =  mongoose.model("pieSchema");

pie.get("/",(req,res)=>{

    res.render("pie");
})

pie.post("/",(req,res)=>{
   
    
    
            pieSchema.aggregate([
                {
                    $match : { state : req.body.state}
                },
                { $group: { _id: "$race", count: { $sum: 1 } } }
             ],(err,docs)=>{
                 res.render("displayAnalysis",{data : docs});   
             }
            ); 

    
    }
    );
    
   



module.exports = pie;
