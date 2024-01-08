import React, { useState } from "react";
import '../Components/Css/Home.css';
import { useNavigate } from "react-router-dom";
import {useFormik} from 'formik';
import Card from '@mui/material/Card'; // Example import from Material-UI
import { Button, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox'; // Adjust the import path based on your library
import { Api } from "./Api";






function Authentication() {
  const navigate = useNavigate();
  const [submitbtn,setSubmitbtn]=useState('Login');
 

  const formik=useFormik({
    initialValues:{username:"",password:""},
    onSubmit:(userDetails)=>{
      login(userDetails);
    }
  });

  const login = async (userDetails) => {
  const data=await fetch(`${Api}/users/login`,{
      method:'POST',
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify(userDetails),
    });
   
      if(data.status === 401) {
        setSubmitbtn("Retry");
        alert("Invalid Credentials");
      } else{
      const user = await data.json();
      localStorage.setItem("token",user.token);
      navigate("/home");
  }
};


  return (

<div className="home-container">
      <div>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt="welcome" width={'500px'} />
        </div>


 <Card className="sigin-container">
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="google" width={'100px'} />
                <p className='sigin-txt1'>Sign in</p>
                <p>to continue to Gmail</p><br />

 
 <form className="sigin-inputs" onSubmit={formik.handleSubmit}>

<TextField
name="username"
label="Email"
variant="outlined"
onChange={formik.handleChange}
value={formik.values.username}
type="email"

>
</TextField>

<br /> 

<TextField
 name="password"
 label="Password"
 variant="outlined"
 onChange={formik.handleChange}
 value={formik.values.password}
 type="password"

>

</TextField>


<br />
<Button variant="contained" type='submit' className="login-button">{submitbtn}</Button>
<br />
</form>


<div className="checkbox-sign">
  <div className="stay"> 
  <Checkbox  /><label className="in">Remember me</label>

</div>
<br/>

<Button variant="contained"  onClick={() => navigate("/signup")} className="create-account">Create a new account  </Button>

</div>
</Card>

    </div>
  );
}

export default Authentication;
