// Home.jsx
import React from "react";
import "./Loginpage.css";
import logo from "../assets/logo.png.jpeg"
import { Link } from "react-router-dom";
import { User } from 'lucide-react';
function Home() {
  return (
    <div className="home-container">
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"> <img src={logo} alt="logo" /></div>

        <ul className="nav-links">
          <li>Matches</li>
          <li>Messages</li>
          <li>Notifications</li>
          <li>Profile</li>
        </ul>
        <div className="logout">
        <Link to="/login">
        <button className="logout-btn">Logout</button>
        </Link>
        <User className="nav-profile-font" size={32} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Perfect Life Partner</h1>
          <p>
            Trusted matrimony platform to connect hearts and families together.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Find Matches</button>
           
          </div>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="dashboard">
        
        <div className="card">
          <h2>New Matches</h2>
          <p>24 Profiles</p>
        </div>

        <div className="card">
          <h2>Messages</h2>
          <p>12 New Messages</p>
        </div>

        <div className="card">
          <h2>Profile Views</h2>
          <p>89 People Viewed</p>
        </div>

        <div className="card">
          <h2>Interests</h2>
          <p>15 Requests</p>
        </div>

      </section>

      {/* Recommended Profiles */}
      <section className="profiles-section">
        <h2 className="section-title">Recommended Matches</h2>

        <div className="profiles-container">

          <div className="profile-card">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="profile"
            />

            <h3>Anjali</h3>
            <p>24 Years • Doctor</p>
            <p>Kochi, Kerala</p>

            <button>View Profile</button>
          </div>

          <div className="profile-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
            />

            <h3>Rahul</h3>
            <p>27 Years • Engineer</p>
            <p>Trivandrum, Kerala</p>

            <button>View Profile</button>
          </div>

          <div className="profile-card">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="profile"
            />

            <h3>Meera</h3>
            <p>25 Years • Designer</p>
            <p>Kollam, Kerala</p>

            <button>View Profile</button>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;