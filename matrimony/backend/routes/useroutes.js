const express=require('express')
const router=express.Router()
const usercontroller=require('../controller/usercontroller')

// create user
router.post('/createuser',usercontroller.registeruser)
// login user
router.post('/loginuser',usercontroller.loginuser)

module.exports=router