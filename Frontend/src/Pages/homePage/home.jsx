import React, { useEffect } from "react";
import ContactNav from "../../Components/ContactNav/contactNav";
import NavBar from "../../Components/NavBar/NavBar";
import Welcome from "../../Components/Welcome/welcome";
import Vision from "../../Components/Vision/vision";
import Touch from "../../Components/Touch/touch";
import Footer from "../../Components/Footer/footer";
import SubFooter from "../../Components/SubFooter/subFooter";
import './home.css';

const Home = () => {

    return(   
        <div>
            <ContactNav /> 
            <NavBar />
            <Welcome/>
            <Vision/>
            <Touch/>
            <Footer/>
            <SubFooter/>
        </div>
    );
}

export default Home;
