import React from "react";
import "./login.css";
import Navbarloginsignup from "../navbarlogin&signup";

function Login() {
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

        <form className="login-form">

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
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