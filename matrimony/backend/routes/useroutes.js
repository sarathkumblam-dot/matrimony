const express=require('express')
const router=express.Router()
const usercontroller=require('../controller/usercontroller')
router.post('/createuser',usercontroller.registeruser)
router.get('/loginuser',usercontroller.loginuser)
module.exports=router