
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a request to the database to get the data for the form fields.
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    // Get the data from the response.
    const data = await response.json();

    // If the login is successful, redirect to the home page.
    if (data.success) {
      window.location.href = "/";
    } else {
      // Display an error message.
      console.error(data.error);
    }
  };
  return (
    <div className='our-login-form'>
    <Navbar /><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <h4>Create Account Form</h4><br></br>
      <form onSubmit={handleSubmit}> <br></br><br></br>
      <p>Aready Have Account ? <Link to='/login'><span1>Login</span1></Link></p>
      <br></br><br></br><br></br><br></br>
      
      <label>Username<br></br>
        <input className='input'
          type="name"
          placeholder="Enter Your UserName"
          value={name}
          onChange={(event) => setName(event.target.value)}
         />
         </label><br></br><br></br>
         <label>Email<br></br>
        <input className='input'
          type="email"
          placeholder="Enter Your UserName"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
         />
         </label><br></br><br></br>
         <label>Password<br></br>
         <input className='input'
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        </label><br></br><br></br><br></br>
        <button className='button' type="submit">Login</button>
      </form><br></br><br></br><br></br>
      <Footer/>
    </div>
    );
  }
  
  export default LoginForm;
    


