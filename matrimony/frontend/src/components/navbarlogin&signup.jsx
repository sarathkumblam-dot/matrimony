import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "./assets/logo.png.jpeg";
import "./navbarloginsignup.css";

function Navbarloginsignup() {

  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="auth">

        {isLoginPage ? (
          <>
            <p>Don't have an account?</p>

            <Link to="/">
              <button>Signup</button>
            </Link>
          </>
        ) : (
          <>
            <p>Already have an account?</p>

            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbarloginsignup;