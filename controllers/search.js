const express = require('express');
const mongoose = require('mongoose');

const searcher = express.Router();
const projectModel =  mongoose.model("project");

searcher.get("/",(req,res)=>{

    res.render("search");
})


// Find by ID
searcher.get("/by_id",(req,res)=>{

    res.render("by_id");
})

searcher.post("/by_id",(req,res)=>{
var id_ = req.body.id;


  projectModel.find({ "id": id_ },(err, docs)=>{ 
        if(!err){
            res.render("list",{data :docs});
            console.log(docs);
         
        }
        else{
            res.send(err);
        }
     }
    )
}
);

//Find by name
searcher.get("/by_name",(req,res)=>{

    res.render("by_name");
})

searcher.post("/by_name",(req,res)=>{
var name_ = req.body.name;


  projectModel.find({ "name": name_ },(err, docs)=>{ 
        if(!err){
            res.render("list",{data :docs});
            console.log(docs);
         
        }
        else{
            res.send(err);
        }
     }
    )
}
);

//Find by date
searcher.get("/by_date",(req,res)=>{

    res.render("by_date");
})

searcher.post("/by_date",(req,res)=>{
var date_ = req.body.date;


  projectModel.find({ "date": date_ },(err, docs)=>{ 
        if(!err){
            res.render("list",{data :docs});
            console.log(docs);
         
        }
        else{
            res.send(err);
        }
     }
    )
}
);

//Find by manner_of_death
searcher.get("/by_manner_of_death",(req,res)=>{

    res.render("by_manner_of_death");
})

searcher.post("/by_manner_of_death",(req,res)=>{
var manner_of_death_ = req.body.manner_of_death;


  projectModel.find({ "manner_of_death": manner_of_death_ },(err, docs)=>{ 
        if(!err){
            res.render("list",{data :docs});
            console.log(docs);
         
        }
        else{
            res.send(err);
        }
     }
    )
}
);

//Find by Armed Type
searcher.get("/by_armed_type",(req,res)=>{

    res.render("by_armed_type");
})

searcher.post("/by_armed_type",(req,res)=>{
var armed_type_ = req.body.armed_type;


  projectModel.find({ "armed": armed_type_ },(err, docs)=>{ 
        if(!err){
            res.render("list",{data :docs});
            console.log(docs);
         
        }
        else{
            res.send(err);
        }
     }
    )
}
);


module.exports = searcher;