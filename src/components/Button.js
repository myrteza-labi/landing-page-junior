import React from 'react'; 
import './Button.css'; 

function Button(props){
    return(
        <button 
        className="Button" 
        bgColor={props.bgColor} 
        color={props.color} 
        secondaryColor={props.secondaryColor}
        >
            {props.children}
        </button>
    )
}

export default Button; 