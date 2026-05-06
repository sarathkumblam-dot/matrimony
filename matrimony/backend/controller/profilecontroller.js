const profile=require('../models/profilemodel')
// create
const createprofile=async(req,res)=>{
const{name,email,currentstatus,currentjob,currentsalary,religeon}=req.body
try {
    const newdata= await new profile({
        name,
        email,
        currentstatus,
        currentjob,
        currentsalary,
        religion
    })
    await newdata.save()
    res.status(200).json({msg:"created sucessfully",data:newdata})
} catch (error) {
    res.status(500).json({msg:"server error"})
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
const updateprofile=async()=>{
    try {
        const{id}=req.params
        const updatedata=createprofile                                                             
    } catch (error) {
        
    }
}
module.exports={createprofile,getprofile}
