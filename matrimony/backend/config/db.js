const mongoose=require('mongoose')
require('dotenv').config()
const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.mongodb_url)
        console.log("mongoose connected sucessfully");
        
    } catch (error) {
        console.log("mongoose not connected");
    }
}
module.exports=connectdb