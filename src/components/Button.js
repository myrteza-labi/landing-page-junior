import React from 'react'; 
import './Button.css'; 

function Button(props){
    return(
        <button id={props.id} className={props.className}>
            {props.children}<span className="version">{props.version}</span>
        </button>
    )
}

export default Button; 