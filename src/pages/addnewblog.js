
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Dnav from '../component/dash navbar';
import InnerDashMenu from '../component/InnerDashMenu';

function Addnewblog() {

    const [name, setName] = useState("");
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
    <div>
    <Dnav/>
    <div className="hero-dashboard">
       <h3>Manage<span> Your Blog</span> | Add new</h3>
     </div>
    <InnerDashMenu/>
    <section className='addnew-section'>
      <div className='dashboard-content'>
      <div className='add-new-blog'>
        <form onSubmit={handleSubmit}> <br></br><br></br>
        <p>Add Blog</p><br></br>
        <br></br><br></br>
        <label>Title<br></br>
          <input className='input'
            type="name"
            placeholder="Enter The Title"
            value={name}
            onChange={(event) => setName(event.target.value)}
           />
           </label><br></br>
    
           <label>Body<br></br>
           <input className='input'
            type="password"
            placeholder="Enter The Body"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          </label><br></br><br></br><br></br>
          <Link to='/dashboard'><button className='button' type="submit">Login</button></Link>
        </form><br></br><br></br><br></br>
    
      </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Addnewblog;