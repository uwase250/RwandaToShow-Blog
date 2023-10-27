import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom'


const Dnav = () => {

    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(true)
    console.log("MENU OPEN", mobileMenuOpen)
    return (
        <div>
        <nav>
            <h3>RwandaToShow</h3>
            <ul className='desktop-menu'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <Link onClick={()=>{
                    window.location = "/";
                    sessionStorage.clear();
                    alert("Logout")
                        }}>Logout</Link>

                        
            </ul>

            <ul className={`mobile-menu ${mobileMenuOpen === false?' hidden':''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link onClick={()=>{
                window.location = "/";
                sessionStorage.clear();
                alert("Logout")
                }}>Logout</Link>
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
       </div>
    )
}

export default Dnav;