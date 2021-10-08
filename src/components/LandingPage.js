import React from 'react'; 
import './LandingPage.css'; 

function LandingPage(props){
    return(
        <div className="LandingPage">
            {props.children}
        </div>
    )
}

export default LandingPage; 