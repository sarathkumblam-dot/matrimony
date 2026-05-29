import './signup.css'
import Navbarloginsignup from "../navbarlogin&signup"
import { useNavigate } from 'react-router-dom'
import { useContext,useState } from 'react'
import { AuthProvider } from '../context/Authcontext'
import { CreateUser } from "../../Api/api";

 const Signup=()=>{
  const {setuser} = useContext(AuthProvider)
      const navigate = useNavigate();
      const [form, setform] = useState({
        name:"",
        email: "",
        password: "",
      });

  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await CreateUser(form); 
      if (res.success) {
        setuser(res.user)
       alert("loggedin succesfully");
        setform(res.user);
        navigate("/allposts");
        console.log("logedin succesfully");
        setform({
          emailid: "",
          password: "",
        });
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };


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

        <form action="" onSubmit={handlesubmit}>

          <div className="input-box">
            <label>Name</label>
            <input type="text" name="name" 
            placeholder="Enter your name"
            value={form.name}
            onChange={handlechange} />
          </div>

          <div className="input-box">
            <label>Email ID</label>
            <input type="email" placeholder="Enter your email" name="emailid" value={form.emailid}
            onChange={handlechange} />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input type="password"
            name="password"  value={form.password}
            onChange={handlechange} 
            placeholder="Enter password" />
          </div>

          {/* <div className="gender-box">
            <label>Gender</label>

            <div className="radio-group">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>

              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div> */}

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
export default Signup