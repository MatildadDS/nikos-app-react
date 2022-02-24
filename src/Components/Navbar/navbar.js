import React, { useState } from 'react'
import { Link,  }  from 'react-router-dom'
import './navbar.scss'

function Navbar() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks) 
    }

    return (
        <div className="nav_container">
            <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
                <ul className="navbar_links">
                    <li className="navbar_items">
                        <Link to="/" className='navbar_link'>Home</Link>
                    </li>

                    <li className="navbar_items">
                        <Link to={"/about"} className='navbar_link'>Biography</Link>
                    </li>
                    <li className="navbar_items">
                        <Link to={"/gallery"} className='navbar_link'>Gallery</Link>
                    </li>
                    <li className="navbar_items">
                        <Link to={"/booking"} className='navbar_link'>Booking</Link>
                    </li>
                    <li className="navbar_items">
                        <Link to={"/ecosystem"} className='navbar_link'>Ecosystem</Link>
                    </li>
                    <li className="navbar_items">
                        <Link to={"/contact"} className='navbar_link'>Contact</Link>
                    </li>
                    <li className="navbar_items">
                        <Link to={"/login"} className='navbar_link'>Login</Link>
                    </li>
                    <li className="navbar_items">
                        <Link to={"/signup"} className='navbar_link'>Register</Link>
                    </li>
                </ul>
                <button className='navbar_burger' onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>
            </nav>
            
        </div>
    )
}

export default Navbar
