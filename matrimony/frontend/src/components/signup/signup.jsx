import './signup.css'
import Navbarloginsignup from "../navbarlogin&signup"
export default function Signup(){
    return(
      <>
      <>
      <Navbarloginsignup/>
      </>
      <div className="background">
        <div className="main-container">
      <div className="form-container">

        <h1>Create a Matrimony Profile</h1>

        <p>Find your perfect partner</p>

        <form>

          <div className="input-box">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-box">
            <label>Email ID</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="gender-box">
            <label>Gender</label>

            <div className="radio-group">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>

              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <button className='btn-create' type="submit">
            Create Profile
          </button>

        </form>
      </div>
    </div>
        
      </div>
      </>
    
    )
}