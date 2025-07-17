import './welcome.css';

const Welcome = () => {
    return(
        <div className="welcome">

            <div className="content" data-aos="fade-left" data-aos-duration="2500">
                <div className="text-info">
                    <h2>WELCOME TO</h2>
                    <h1>THE ANELE MOCHWISI</h1>
                    <h1>FOUNDATION</h1>
                    <h5>EMPOWERING LIVES, BUILDING FUTURES</h5>
                </div>

                <div>
                    <button className="welcome-button">
                        LEARN MORE
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Welcome;