const mongoose = require("mongoose");
const profileschema=new mongoose.Schema({
  name: String,

  email: String,

  password: String,

  age: Number,

  gender: String,

  religion: String,

  caste: String,

  education: String,

  profession: String,

  salary: String,

  location: String,

  about: String,

  images: [String],
  
  premium: {
    type: Boolean,
    default: false
  }
},{timestamps:true})

const profile=mongoose.model('profile',profileschema)
module.exports=profile