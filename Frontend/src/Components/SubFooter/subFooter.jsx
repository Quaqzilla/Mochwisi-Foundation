import './subFooter.css';
import copyright from '../../assets/copyright.svg';

const SubFooter = () => {
    return(
        <div className="subFooter">
            <img src={copyright} alt="copy-right"/>
            <h3>Anele Mochwisi Foundation|All rights reserved</h3>
        </div>
    )
}

export default SubFooter;