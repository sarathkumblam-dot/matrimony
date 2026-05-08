const mongoose = require("mongoose");
const profileschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    currentjob:{
         type:String,
         required:true
    },
    currentsalary:{
         type:String,
         required:true
    },
    religion:{
        type:String,
        required:true
    }
},{timestamps:true})

const profile=mongoose.model('profile',profileschema)
module.exports=profile