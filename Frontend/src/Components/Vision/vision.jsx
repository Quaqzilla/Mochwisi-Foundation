import './vision.css';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';

const Vision = () => {
    return(
        <div className="vision">
            <div className="vision-content">

                <div className="info-content">
                    <div className="text">
                        <h2>Why We Exist</h2>
                        <p>
                        We stand for hope, dignity, and opportunity. Our foundation is dedicated to supporting <br/>
                        women, young teenagers facing unplanned pregnancies, and children from disadvantaged <br/>
                        backgrounds. We believe in the power of compassion and action—providing guidance, resources, and a
                        safe space to overcome challenges. Youth face systemic barriers to education, employment, and mental 
                        well-being, limiting their opportunities to thrive. Women endure gender-based violence, economic 
                        marginalization, and restricted access to essential resources, making empowerment more urgent than ever. 
                        Through education, empowerment, and care, we help shape brighter futures and create lasting change. 
                        Collective action is needed to dismantle inequalities and build inclusive communities. Everyone deserves 
                        the chance to thrive, and we are here to make that possible.
                        </p>
                    </div>
                    <img src={image1} alt="image" />
                </div>

                <div className="info-content">
                    <div className="text">
                        <h2>Our Vision</h2>
                        <p>
                        We envision a world where every woman, teenager, and child—regardless of their circumstances—has
                        the support, resources, and opportunities to thrive. We strive to build a future where unplanned
                        pregnancies are met with compassion, where young mothers are empowered, and where children from
                        disadvantaged backgrounds are given the tools to succeed. Through education, care, and unwavering
                        support, we work toward a society where dignity, hope, and possibility are available to all.
                        </p>
                    </div>
                    <img src={image2} alt="image" />
                </div>

                <div className="info-content">
                    <img src={image3} alt="image" />
                    <div className="text">
                        <h2>Our Mission</h2>
                        <p>
                        Our mission is to uplift and empower women, young teenagers facing unplanned pregnancies, and children
                        from disadvantaged backgrounds. We provide compassionate support, essential resources, and educational
                        opportunities to help them overcome challenges and build brighter futures. Through advocacy, guidance,
                        and community-driven efforts, we create a safe space where dignity, hope, and resilience thrive. We 
                        are committed to fostering a world where everyone has the chance to succeed, regardless of their circumstances.
                        </p>
                    </div>
                </div>

                <div className="info-content">
                    
                    <div className="text">
                        <h2>Our Objectives</h2>
                        <p>
                        We aim to provide essential support, education, and resources to women, young teenagers experiencing unplanned pregnancies,
                        and children from disadvantaged backgrounds. Our goal is to empower individuals through mentorship, guidance, and access 
                        to opportunities that help them build brighter futures. By fostering a compassionate and inclusive community, we work to 
                        break cycles of hardship and create lasting positive change.
                        </p>
                        <button className="read-more">
                            READ MORE
                        </button>
                    </div>
                    <img src={image4} alt="image" />
                </div>



            </div>
        </div>
    )
}

export default Vision;