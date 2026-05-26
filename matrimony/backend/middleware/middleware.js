const jwt=require('jsonwebtoken')
const authmiddleware=async(req,res,next)=>{
  //  const header=req.header('Authorization')
  //  if(!header){
  //    return res.status(400).json({msg:"please login to continue"})
  // }
  try {
    // const token=header.split(" ")[1]
    const token = req.cookies.token
    if(!token){
      return res.status(404).json({msg:"no token"})
    }
    const decodedtoken=jwt.verify(token,process.env.secret_key)
    req.user=decodedtoken
    next()
  } catch (error) {
    res.status(401).json({msg:"invalid token"})
    
  }
}
module.exports=authmiddleware