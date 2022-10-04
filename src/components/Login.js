import React, { useState } from "react";
import '../style/form.css'
import ImageOne from "./ImageOne";
import Image from "../images/Group.png";
import{ FaUser, FaAddressCard, FaTwitter, FaGoogle, FaInstagram,  FaFacebookF, FaArrowRight} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
export default function Form(){
    const navigate = useNavigate();
    const[data, setFormData] = useState("");

    const handleSubmit = event =>{
        event.preventDefault();
       
    }
    const handleChange = event => {
        console.log(event.target.value)
        setFormData({
            ...data,
           [event.target.name]: event.target.value
          
        });
     
    
      }      

     const handleClick = () =>{
        console.log(data)
     }

    return(
        <div className="main-form">

        <ImageOne/>
        <div className="form-fields">
        
       
        <FaArrowRight icon="fa-solid fa-arrow-right"  className="arrow-right" onClick={handleClick} />
        <form className="form" onSubmit={handleSubmit}>
            
            <div className="input-container">
            <FaUser icon="fa-solid fa-user" />
                <input className="input-field" type="text" onChange={handleChange} placeholder="Username or email" name="username" value={data.Username}/>
            </div>

           
            
            <div className="input-containers">
            <FaAddressCard icon="fa-solid fa-passport" />
                <input className="input-field" type="password" onChange={handleChange} placeholder="Password" name="password" value={data.Password}/>
            </div>

           
        </form>
       
         <span className="warning">Forgot your password</span>
        <button  className="register" type="submit" onClick={()=>navigate("/")}><b>Register</b></button>
        
          <div className="social-icon">
        <p className="text">Or sing in with</p>
          <FaFacebookF icon="fa-brands fa-facebook-f"/> 
          <FaTwitter icon="fa-brands fa-twitter" />
          <FaGoogle icon="fa-brands fa-google-plus-g" />
          <FaInstagram icon="fa-brands fa-instagram" />
          </div>

        
        </div>
          <div className="image">
        <img src={Image} alt="img"/>
       </div>
        </div>
     
    )
}

