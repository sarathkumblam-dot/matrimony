const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
        unique: true 
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']

    }
},{timestamps:true})

const user=mongoose.model('user',userschema)
module.exports=user