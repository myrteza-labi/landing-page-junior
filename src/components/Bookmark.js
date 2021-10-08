import React from 'react'; 
import './Bookmark.css'; 

function Bookmark(props){
    return(
        <p number={props.number} className="Bookmark"></p>
    )
}

export default Bookmark; 