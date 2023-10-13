import React, { useState } from 'react'
// import {FaBar} from 'react-icons/fa'
import Button from "./button"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(true)
    console.log("MENU OPEN", mobileMenuOpen)
    return (
        <nav>
            <h3>RwandaToShow</h3>
            <ul className='desktop-menu'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </ul>

            <ul className={`mobile-menu ${mobileMenuOpen === false?' hidden':''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/login">Login</Link>
            </ul>
            <span className='menu'>
                <button onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(!mobileMenuOpen)
                }}>
                    Menu
                </button>
            </span>
        </nav>
    )
}

export default Navbar
