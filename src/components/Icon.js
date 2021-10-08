import React from 'react'; 
import './Icon.css'; 
import logo from '../images/logo.svg';

function Icon(props){
    return(
        <img src={logo} alt="logo meet" className="Icon" />
    )
}

export default Icon; 