import React from "react";
import Card from '@mui/material/Card';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://surl.li/nbkrc">
        Balaji
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let initialValue = {
  name: "",
  username: "",
  password: "",
};

function Signup() {
  const [signup, setSignup] = useState(initialValue);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://gmail-clone-xbb8.onrender.com/users/signup",
        JSON.stringify(signup),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => setSignup(initialValue));
    navigate("/signin");
  };

  return (
    <div className='signup-container'>
            <Card className='signup-card'>
                <div className='signup-form'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="google" width={'100px'} />
                    <p className='signup-txt1'>Create your Google Account</p>
                    <p>to continue to Gmail</p><br />
                    


        <form className="signup-inputs">

          <TextField
            name="name"
            label="Enter your fullname"
            variant="outlined"
            onChange={handleChange}
            placeholder="Full name"
            className="sign-in-email"
            
          
          >

          </TextField>
          <br/>
          
          <TextField
           name="username"
           label="Email"
           variant="outlined"
           onChange={handleChange}
           placeholder="Email"
          
           
          >

          </TextField>
          <br/>

        

          <TextField
            name="password"
            label="Password"
            variant="outlined"
           onChange={handleChange}
           placeholder="Password"
           
          
          
          />
           <br/>
          
          <TextField
               label="Re-enter password"
                variant="outlined"
               type='password'
                        />
 <br/>
 <FormControlLabel
  control={<Checkbox value="allowExtraEmails" color="primary" />}
   label="I Accepts terms and conditions."/>
          

         <br/>
         <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>

          
          </form>
          </div>

          <div className='signup-right'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Google_account_icon.svg/803px-Google_account_icon.svg.png" alt="oneAccount" width={'250px'} />
                    <p>One account. All of Google</p>
                    <p>working for you.</p>
                    <Copyright sx={{ mt: 5 }} />
                </div>
            </Card>
        </div>
    
         
  );
}

export default Signup;
