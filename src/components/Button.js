import React from 'react'; 
import './Button.css'; 

function Button(props){
    return(
        <button className={props.className}>
            {props.children}{props.version}
        </button>
    )
}

export default Button; 