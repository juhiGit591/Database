const express = require('express');
const mongoose = require('mongoose');

const pie = express.Router();
const pieSchema =  mongoose.model("pieSchema");

pie.get("/",(req,res)=>{
    

    pieSchema.aggregate([
        { $group: { _id: "$state", count: { $sum: 1 } } }
     ],(err,docs)=>{
         console.log(docs);
     }
    );
    
     


    res.render("pie");
})

pie.post("/",(req,res)=>{
   
   
    }
    );
    




module.exports = pie;
