const express=require('express')
const router=express.Router()
const profilecontroller=require('../controller/profilecontroller')
const authmiddleware=require('../middleware/middleware')


// create profile//authorization
router.post('/createprofile',authmiddleware,profilecontroller.createprofile)
// read profile
router.get('/getprofile',authmiddleware,profilecontroller.getprofile)
// update profile
router.put('/updateprofile/:id',authmiddleware,profilecontroller.updateprofile)
// delete profile
router.delete('/deleteprofile/:id',authmiddleware,profilecontroller.deleteprofile)

module.exports=router