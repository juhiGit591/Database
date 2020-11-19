const express = require('express');
const mongoose = require('mongoose');

const pie = express.Router();
const pieSchema =  mongoose.model("pieSchema");



function resolve1(state1, toDisplay) {
   
        pieSchema.aggregate([
            { $match: { state: state1 } },
               { $group: { _id: "$state", count: { $sum: 1 } } }
            ],((err,docs)=>{
                if(!err){
                
                toDisplay += state1 + " has "+ docs[0].count + " total crimes.\n";
                console.log(toDisplay);
               return toDisplay;
                }
            }
            )
            ); 
            
  }


  function resolve2(state1,toDisplay) {

        pieSchema.aggregate([
            { $match: { state: state1 } },
               { $group: { _id: "$race", count: { $sum: 1 } } }
            ],((err,docs)=>{
           if(!err){
                toDisplay += state1 + " has crimes distributed by race as follows:\n";
                var total = 0;
             for(var i=0;i<docs.length;i++){
                 total += docs[i].count;
             }
             
             for(var i=0;i<docs.length;i++){
                toDisplay += docs[i]._id + " : " + docs[i].count*100/total + "%\n"; 
        
            }
            console.log(toDisplay);
            return toDisplay;
        }
        
         })
        );
    
    
    

  }
  
   function resolve3(state2,toDisplay) {
    
        pieSchema.aggregate([
            { $match: { state: state2 } },
               { $group: { _id: "$state", count: { $sum: 1 } } }
            ],((err,docs)=>{
               if(!err){
                toDisplay += state2 + " has "+ docs[0].count + " total crimes.\n";
                console.log(toDisplay);
              return toDisplay;
               }
                
            }));
    
    
    
      }
  
  function resolve4(state2,toDisplay) {
    
        pieSchema.aggregate([
            { $match: { state: state2 } },
               { $group: { _id: "$race", count: { $sum: 1 } } }
            ]).exec().then((docs)=>{
            
            toDisplay += state2 + " has crimes distributed by race as follows:\n";
            var total = 0;
         for(var i=0;i<docs.length;i++){
             total += docs[i].count;
         }
         
         for(var i=0;i<docs.length;i++){
            toDisplay += docs[i]._id + " : " + docs[i].count*100/total + "%\n"; 
        }
        console.log(toDisplay);

        return toDisplay;
     });
    
    
  }

pie.get("/",(req,res)=>{                

        res.render("pie");
    });

    
pie.post("/",async (req,res)=>{
    var state1 = req.body.state1;
    var state2 = req.body.state2;
    var toDisplay = "";

    toDisplay = await resolve1(state1,toDisplay);
    toDisplay = await resolve2(state1,toDisplay);
    toDisplay = await resolve3(state2,toDisplay);
    toDisplay=await  resolve4(state2,toDisplay);
  await console.log(toDisplay);
  await console.log('done');
 var obj = {"id": 1, "value" :toDisplay};
  await    res.render("pieresult",{data : obj});
    }
    );
    
module.exports = pie;
