import React from "react";
import './contactNav.css';
import email from '../../assets/mail.svg';
import phone from '../../assets/phone.svg';

const ContactNav = () => {
    return(
        <div className="contact-nav">

        <div className="email">
            <p className="email-info">
                <img src={email} alt="email-icon" />  
                anelemochwisifoundation@gmail.com
            </p>
        </div>

        <div className="cell">
            <p className="cell-info">
                <img src={phone} alt="phone-icon" />  
                061 447 3485
            </p>
        </div>

    </div>
    )
}

export default ContactNav;