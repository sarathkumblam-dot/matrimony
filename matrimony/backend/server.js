const express=require('express')
const app=express()
const port=8000
const connectdb=require('./config/db')
connectdb()
const profileroute=require('../backend/routes/profileroute')
const userouter=require('./routes/useroutes')
const cors=require('cors')
app.use(cors())

app.use(express.json())
app.use('/profile',profileroute)
app.use('/user',userouter)
app.listen(port,()=>{
    console.log("server running");
    
})


