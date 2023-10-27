import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import Button from "./button"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";




const Navbar = () => {
    const [modal, setModal] = useState(false);
    const handleModal = ()=>{
        console.log("hello modal");
      setModal(!modal)
      setModale(false)
    }
    const [modale, setModale] = useState(false);
    const handleModale = ()=>{
        console.log("hello modal");
      setModale(!modale)
      setModal(false)
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(true)
    console.log("MENU OPEN", mobileMenuOpen)



      // Define state variables for the form fields
      const [first, setFirstname] = useState('');
      const [lastname, setLastname] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [profile, setProfile] = useState('');
  
      const FormData = {
          first,
          lastname,
          email,
          password,
          profile,
      };
  
      const handlesignup = async (data) => {
          try {
              const response = await fetch('https://blog-6hj4.onrender.com/api/user/signup', 
              {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                  },
                body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
              });
  
              if (response.ok) {
                  const data = await response.json();
                  console.log('Response:', data);
                  alert("Account Created Successfully")
                  setFirstname('')
                  setLastname('')
                  setEmail('')
                  setPassword('')
                  setProfile('')
              }
               else
                {
                  console.error('Failed to create user.');
                }
          } 
          catch (error) 
          {
              console.error('Error:', error);
          }
      };

    
        const navigate  = useNavigate()
          console.log({ email, password })
    
          const handleEmail = (e) => {
            setEmail(e.target.value)
          }
        
          const handlePassword = (e) => {
            setPassword(e.target.value)
          }
        
          const handleApi = () => {
            console.log({ email, password })
            axios.post('https://blog-6hj4.onrender.com/api/user/login',
             {
              email: email,
              password: password
            })
            .then(result => {
            console.log(result.data)
            const token = localStorage.setItem("token",result.data.token)
            console.log("tokennnnnnnn = ",token);
            alert('success logged in')
            navigate("/dashboard")
            })
              .catch(error => {
                alert('incorrect password')
                console.log(error)
              })
          }
    

    return (
        <div>
        
        
        <nav>
            <h3>RwandaToShow</h3>
            <ul className='desktop-menu'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link onClick={handleModal}>Login</Link>
            </ul>

            <ul className={`mobile-menu ${mobileMenuOpen === false?' hidden':''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link onClick={handleModal}>Login</Link>
            </ul>
            <span className='menu'>
                <button onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(!mobileMenuOpen)
                }}>
                    MENU
                </button>
            </span>
        </nav>




        {
            modal && <div className="loginModal"> 
            
            <button onClick={handleModal} className="close"><AiOutlineClose className='iconx'/></button>
            <div className="form">
            <h3>Login Form</h3>
            <p>Already Have Account or <Link  onClick={handleModale}>Create Account</Link></p>
            <div className='inputController'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Email' value={email} onChange={handleEmail}/>
            </div>
            <div className='inputController'>
            <label htmlFor="">Password</label>
            <input type="password"  placeholder='Password' value={password} onChange={handlePassword}/>
            </div>
           <input type="submit" onClick={handleApi} value="Login"/>
            </div>
            </div>
        }

        {
            modale && <div className="loginModal"> 
            
            <button onClick={handleModale} className="close"><AiOutlineClose className='iconx'/></button>
            <div className="form">
            <h3>Create Account</h3>
            <p>Already Have Account<Link onClick={handleModale}> Login</Link></p>
            <div className='inputController'>
            <label htmlFor="">FirstName</label>
            <input type="text" required="required" placeholder='Firstname' value={first} onChange={(e) => setFirstname(e.target.value)}  />
            </div>
            <div className='inputController'>
            <label htmlFor="">LastName</label>
            <input type="text" required="required" placeholder='Lastname' value={lastname} onChange={(e) => setLastname(e.target.value)}  />
            </div>
            <div className='inputController'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            
            </div>
            <div className='inputController'>
            <label htmlFor="">Password</label>
            <input type="password"placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
            </div>
            <input type="file" placeholder='Upload image' name='image' value={profile} onChange={(e) => setProfile(e.target.value)}/>
            <input type="submit" onClick={(e) => {
                e.preventDefault()
                handlesignup(FormData)
            }} value="Create Account"/>
            
            </div>
            </div>
        }
        </div>         
    )

}


export default Navbar
