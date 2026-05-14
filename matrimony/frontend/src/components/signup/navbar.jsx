import logo from "./assets/logo.png.jpeg"
import  "./navbar.css";

export default function Navbar(){
    return(
      <nav className="navbar">
          <div className="logo">
          <img src={logo} alt="logo"/>
          </div>
          <div className="login">
          <p>Already a member?</p>
          <button>Login</button>
          </div>
        </nav>
        );
}