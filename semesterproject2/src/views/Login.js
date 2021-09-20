import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../settings/api.js";
import HeroBanner from "../components/Header";
import SummerPalette from "../assets/images/16269.jpg";

import GlobalContext from '../context/GlobalContext'

import axios from 'axios'

const productsUrl = baseUrl + "/home";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // context
  const Global = React.useContext(GlobalContext)

const Submit=async()=>{
const { data } = await axios.post('http://localhost:1337/auth/local', {
  identifier: username,
  password: password,
});
 Global.setUserAuth(data)
}
  return (
    <>
      <Navbar />
      <div className="wrapper">
      <div className="body-container">
      <div className="login-wrapper">
      <div className="input-col"> 
      <h1 className="h1-login">Log In</h1>
      <label className="login" for="email">Email:</label>
      <input className="login" id="email" onChange={(e)=>setUsername(e.target.value)}/>
      <label className="login" for="password">Password:</label>
      <input className="login" id="password" onChange={(e)=>setPassword(e.target.value)}/>
      <button className="login-btn" onClick={()=>Submit()}>Log In</button>
      </div>
      <div className="image-col"> <img
        className="login-img"
        src={SummerPalette}
        alt="Nail polish"
      />
      </div>
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
