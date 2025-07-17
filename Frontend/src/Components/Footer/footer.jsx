import './footer.css';
import select from '../../assets/select.svg';
import instagram from '../../assets/instagram.png';

const Footer = () => {
    return(
        <div className="footer">

            <div className="footer-links">
                <h1>QUICK LINKS</h1>
                <ul>
                    <a href='#'><img src={select} alt="" width={20}/>ABOUT US</a>
                    <a href='#'><img src={select} alt="" width={20}/>OUR SERVICES</a>
                    <a href='#'><img src={select} alt="" width={20}/>WHAT WE DO</a>
                    <a href='#'><img src={select} alt="" width={20}/>OUR OBJECTIVES</a>
                </ul>
            </div>

            <div className="footer-contact">
                <h1>CONTACT US</h1>
                <div className="footer-images">
                    <img src={instagram} alt="instagram" />
                </div>
                <button className="footer-gmail">
                    CONTACT US
                </button>
            </div>
        </div>
    )
}

export default Footer;
