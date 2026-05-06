const express=require('express')
const app=express()
const port=8000
const connectdb=require('./config/db')
connectdb()
const profileroute=require('../backend/routes/profileroute')
app.use(express.json())
app.use('/profile',profileroute)
app.listen(port,()=>{
    console.log("server running");
    
})

