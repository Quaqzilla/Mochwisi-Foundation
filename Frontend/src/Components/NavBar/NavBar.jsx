import './NavBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../../assets/logo.png';

const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(prev => !prev);
    };

    return(
        <div className="main-nav">

                <img src={logo} alt="business-logo" />

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
            
                <div className="small-screens">

                    <div class={`off-screen-menu ${isActive ? "active" : ""}`}>
                        <ul>
                            
                        </ul>
                    </div>

                    <nav>
                        <div class={`ham-menu ${isActive ? "active" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </nav>

                </div>
            
            

        </div>
    )
}

export default NavBar;