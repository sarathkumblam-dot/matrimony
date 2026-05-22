const express=require('express')
const app=express()
const port=8000
const connectdb=require('./config/db')
connectdb()
const profileroute=require('./routes/profileroute')
const userouter=require('./routes/useroutes')
const Cookieparser=require('cookie-parser')
app.use(Cookieparser())
const cors=require('cors')
app.use(cors({
     origin: "http://localhost:5173",
     credentials: true }))
const cookieparser=require('cookie-parser')
app.use(cookieparser())

app.use(express.json())
app.use('/profile',profileroute)
app.use('/user',userouter)
app.listen(port,()=>{
    console.log("server running");
    
    
    
})


