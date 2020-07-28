import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/exit.svg';

const Logout = (props) => {

    return(
        
        <div>
            <img id="logout" className="logout" src={logoutPic} alt="powerbutton"/>
        </div>
    )
};

export default Logout;