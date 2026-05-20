import { Route,Routes } from "react-router-dom";
import Signup from "../signup/signup";
import Login from "../login/login";
import card from "../home/card";
import React from 'react'

function Homepage() {
  return (
    <div>
        <Routes>
       <Route path="/" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>    
       <Route path="/card" element={<card/>}/>    

        </Routes>
    </div>
  )
}

export default Homepage