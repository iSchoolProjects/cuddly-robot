import React, { useState } from "react";
import '../style/form.css'
import ImageOne from "./ImageOne";
import Image from "../images/Group.png";
import{FaMailBulk, FaUser, FaAddressCard, FaTwitter, FaGoogle, FaInstagram,  FaFacebookF, FaArrowRight} from 'react-icons/fa'
import {useNavigate} from "react-router-dom"
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
        
        <button  className="btn" type="submit" onClick={()=>navigate("/login")}><b>Login</b></button>
        <FaArrowRight icon="fa-solid fa-arrow-right"  className="arrow" onClick={handleClick} />
        <form className="form" onSubmit={handleSubmit}>
            
            <div className="input-container">
            <FaUser icon="fa-solid fa-user" />
                <input className="input-field" type="text" onChange={handleChange} placeholder="Username" name="username" value={data.Username}/>
            </div>

            <div className="input-container">
            <FaMailBulk icon="fa-sharp fa-solid fa-envelope" />
                <input className="input-field" type="text" onChange={handleChange} placeholder="Email" name="email" value={data.Email}/>
            </div>
            
            <div className="input-container">
            <FaAddressCard icon="fa-solid fa-passport" />
                <input className="input-field" type="password" onChange={handleChange} placeholder="Password" name="password" value={data.Password}/>
            </div>

            <div className="input-containers">
            <FaAddressCard icon="fa-solid fa-passport" />
                <input className="input-field" type="password" onChange={handleChange} placeholder="Repeate Password" name="repeatepassword" value={data.Repeatepassword}/>
            </div>

        </form>

          <div className="social-icons">
            <p className="social-text">Or sing in with</p>
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

