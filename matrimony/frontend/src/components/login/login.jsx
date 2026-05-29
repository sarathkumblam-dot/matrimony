import React from "react";
import "./login.css";
import Navbarloginsignup from "../navbarlogin&signup";
import { useState } from "react";
import { LoginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
  const navigate= useNavigate();
  const [form,setform]=useState({
    emailid:"",
    password:"",
  });
  const handlechange=(e)=>{
    setform({
      ...form,
      [e.target.name]:e.target.value,
    })
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
      const res = await LoginUser(form);
      console.log(res);
      
      if(res.success){
        console.log("login successful");
         alert("Login Successfully");
        navigate("/loginpage")
      }
      else{
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <Navbarloginsignup/>
    <div className="backgroundlogin">
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to continue your journey</p>
        </div>

        <form className="login-form" 
        action="" onSubmit={handlesubmit}>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="emailid"
              value={form.emailid}
              onChange={handlechange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={form.password}
              onChange={handlechange}
            />
          </div>

          <div className="extra-options">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember"> Remember me</label>
            </div>

            <p>Forgot Password?</p>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

      </div>

    </div>
    </div>
    </>
  );
}

export default Login;