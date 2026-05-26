const { error } = require('winston')
const profile=require('../models/profilemodel')

// create
const createprofile=async(req,res)=>{
const{password,age,religion,caste,education,profession,salary,location,about,images, premium,gender}=req.body
try {
    const newdata= await new profile({
        name:req.user.name,
        email:req.user.emailid,
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
    res.status(500).json({msg:"server error",e:error.message})
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
     
    try {
        const {id}=req.params
        const deletedprofile=await profile.findByIdAndDelete(id)
        if(!deletedprofile){
            res.status(400).json({msg:"profile not found"})
          
            console.log(error);
            console.log(id, id.length)
            
        }
        else{
            res.status(200).json({msg:"deleted sucessfully"},{data:deletedprofile})
        }
    } catch (error) {
        res.status(500).json({msg:"server error",e:error.message})
        console.log(error);
        
    }
}

// const deleteProfile = async (req, res) => {

//     try {

//         const { id } = req.params;

//         const deletedProfile = await Profile.findByIdAndDelete(id);

//         if (!deletedProfile) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Profile not found"
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Deleted successfully"
//         });

//     } catch (error) {

//         console.log(error);

//         res.status(500).json({
//             success: false,
//             error: error.message
//         });
//     }
// };


module.exports={createprofile,getprofile,updateprofile,deleteprofile}
