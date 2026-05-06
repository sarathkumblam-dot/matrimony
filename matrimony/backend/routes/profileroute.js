const express=require('express')
const router=express.Router()
const profilecontroller=require('../controller/profilecontroller')
router.post('/createprofile',profilecontroller.createprofile)
router.get('/getprofile',profilecontroller.getprofile)
module.exports=router