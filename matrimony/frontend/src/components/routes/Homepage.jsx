import { Route,Routes } from "react-router-dom";
import Signup from "../signup/signup";
import Login from "../login/login";
import Grid from "../Grid";
import Loginpage from "../home/Loginpage"
import React from 'react'

function Homepage() {
  return (
    <div>
        <Routes>
       <Route path="/" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>    
       <Route path="/grid" element={<Grid/>}/>    
       <Route path="/loginpage" element={<Loginpage/>}/>    
 
        </Routes>
    </div>
  )
}

export default Homepage