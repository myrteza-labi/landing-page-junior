import React from 'react'; 
import './Button.css'; 

function Button(props){
    return(
        <button id={props.id} className={props.className}>
            {props.children}{props.version}
        </button>
    )
}

export default Button; 