const profile=require('../models/profilemodel')
// create
const createprofile=async(req,res)=>{
const{ email,password,age,gender,religion,caste,education,profession,salary,location,about,images,
        premium}=req.body
try {
    const newdata= await new profile({
        name:req.user.name,
        email,
        password,
        age,
        gender,
        religion,
        caste,
        education,
        profession,
        salary,
        location,
        about,
        images,
        premium
    })
    await newdata.save()
    res.status(200).json({msg:"created sucessfully",data:newdata})
} catch (error) {
    res.status(500).json({msg:"server error"})
    console.log(error);
    
}
}
// read
const getprofile=async(req,res)=>{
    try {
        const getdata=await profile.find().sort({createdAt:-1})
        res.status(200).json({msg:"data",data:getdata})
    } catch (error) {
        res.status(500).json({msg:"server error"})
    }
}
// update
const updateprofile=async(req,res)=>{
    try {
    const {id}=req.params
    const updateprofile=await profile.findByIdAndUpdate(id,req.body,{new:true})
    if(!updateprofile){
        res.status(400).json({msg:"profile not found"})
    }
    else{
        res.status(200).json({msg:"update sucessfull"},{data:updateprofile})
    }
    } catch (error) {
        res.status(500).json({msg:"server error",e:error.message})
        console.log(error);
        
    }
}
// delete
const deleteprofile=async(req,res)=>{
     const {id}=req.params
    const deleteprofile=await profile.findByIdAndDelete(id)
    try {
        if(!deleteprofile){
            res.status(400).json({msg:"profile not found"})
        }
        else{
            res.status(200).json({msg:"deleted sucessfully"},{data:deleteprofile})
        }
    } catch (error) {
        res.status(500).json({msg:"server error",e:error.message})
    }
}
module.exports={createprofile,getprofile,updateprofile,deleteprofile}
