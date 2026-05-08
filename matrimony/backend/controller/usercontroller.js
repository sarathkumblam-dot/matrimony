const user = require('../models/usermodel')
const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const saltrounds=10
const registeruser=async(req,res)=>{
    const {name,emailid,password,gender}=req.body
    try {
       const user=await User.findOne({emailid})
       if(user){
            return res.status(400).json({msg:"user already exists"})        
       } 
     const hashedpassword=await bcrypt.hash(password,saltrounds)
     const userdata=await new User({name,emailid,password:hashedpassword,gender})
     await userdata.save()
     res.status(201).json({msg:"user created sucessfully",data:userdata})  
    } catch (error) {
     res.status(500).json({msg:"server error",e:error.message})
    }
}


// login

const loginuser=async(req,res)=>{
    const{emailid,password}=req.body
    try {
        const user=await User.findOne({emailid})
        if(!user){
            return res.status(404).json({msg:"not registered,please register"})
        }
        const matchpassword=await bcrypt.compare(password,User.password)
        if(!matchpassword){
            return res.status(404).json({msg:"invalid password"})
        }
        res.status(200).json({msg:"loged in sucessfull"})
    } catch (error) {
        res.status(500).json({msg:"server error"})
    }
}
module.exports={registeruser,loginuser}