
const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

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
        const matchpassword=await bcrypt.compare(password,user.password)
       
        if(!matchpassword){
            return res.status(404).json({msg:"invalid password"})
        }
         const token=jwt.sign({id:user._id,name:user.name,emailid:user.emailid,gender:user.gender},process.env.secret_key,{expiresIn:'5h'})
        res.status(200).json({msg:"log in sucessfull",token:token})
    } catch (error) {
        res.status(500).json({msg:"server error"})
        console.log(error)
    }
}
module.exports={registeruser,loginuser}