const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    id :{
        type : Number,
        required : "Required"
    },
    name:{
        type : String,
    },
    date: {
        type : Date
    },
    manner_of_death : {
        type: String
    },
    armed:{
        type : String,
    },
    age:{
        type : Number,
    },
    gender:{
        type : String,
    },
    race:{
        type : String,
    },
    city:{
        type : String,
    },
    state:{
        type : String,
    },
    signs_of_mental_illness:{
        type : String,
    },
    threat_level:{
        type : String,
    },
    flee:{
        type : String,
    },
    body_camera:{
        type : String,
    },
    arms_category:{
        type : String,
    }
    
});

mongoose.model("project",projectSchema);