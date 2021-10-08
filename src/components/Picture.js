import React from 'react'; 
import './Picture.css'; 

function Picture(props){
    return(
        <img src={props.src} alt={props.alt}  className="Picture"/>
    )
}

export default Picture; 