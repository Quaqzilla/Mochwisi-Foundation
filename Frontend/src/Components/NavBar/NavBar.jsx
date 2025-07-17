import './NavBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    return(
        <div className="main-nav">

            <img src="" alt="business-logo" />

            <div className="nav-links">
                <ul>
                    <li>ABOUT US</li>
                    <li>WHAT WE DO</li>
                    <li>ADDITIONAL</li>
                </ul>
            </div>

            <button className="contact">
                Contact US
            </button>

        </div>
    )
}

export default NavBar;