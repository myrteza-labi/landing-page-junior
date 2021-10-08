import React from 'react'; 
import './Galery.css'; 

function Galery(props){
    return(
        <section className="Galery">{props.children}</section>
    )
}

export default Galery; 