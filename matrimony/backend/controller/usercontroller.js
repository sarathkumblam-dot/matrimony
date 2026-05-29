
const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { Error } = require('mongoose')

const saltrounds=10
const registeruser = async (req, res) => {
    const { name, emailid, password } = req.body;
    try {
        // 1. Check if user already exists
        const user = await User.findOne({ emailid });
        if (user) {
            return res.status(400).json({ msg: "user already exists" });
        }

        // 2. Hash password (Make sure saltrounds is defined, e.g., const saltrounds = 10)
        const saltrounds = 10; 
        const hashedpassword = await bcrypt.hash(password, saltrounds);

        // 3. Create and save the new user
        // Note: You can pass the object directly into User.create or use your approach, but remember to read from 'userdata' next!
        const userdata = new User({ name, emailid, password: hashedpassword });
        await userdata.save();

        // 4. ✅ FIX: Use 'userdata' instead of 'user' to sign the token
        const token = jwt.sign(
            { id: userdata._id, name: userdata.name }, 
            process.env.SECRET_KEY, 
            { expiresIn: '1h' }
        );

        // 5. Setting cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // Make sure your frontend is running on HTTPS if this is true!
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // 6. Send success response
        return res.status(201).json({
            msg: "user created successfully",
            data: userdata,
            success: true,
            user: {
                name: userdata.name,
                emailid: userdata.emailid
            }
        });

    } catch (error) {
        console.error("Registration Error:", error); // Check your terminal to see this logged!
        return res.status(500).json({ msg: "server error", e: error.message });
    }
};

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
            return res.status(401).json({msg:"invalid password"})
              
        }
         const token=jwt.sign({id:user._id,name:user.name,emailid:user.emailid},process.env.SECRET_KEY,{expiresIn:'5h'})
         res.cookie("token",token,{
                    httpOnly:true,
                    secure:false,
                    sameSite:"lax",
                    maxAge:7*24*60*60*1000
                  })
        res.status(200).json({
            success:true,
            msg:"log in sucessfull",
            token:token,
        user:{
            name:user.name,
            emailid:user.emailid
        }
        })
    }catch (error) {
    console.log("LOGIN ERROR:", error)

    res.status(500).json({
        msg: "server error",
        error: error.message
    })
}
}
module.exports={registeruser,loginuser}