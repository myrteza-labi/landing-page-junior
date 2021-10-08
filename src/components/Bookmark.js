import React from 'react'; 
import './Bookmark.css'; 

function Bookmark(props){
    return(
        <p className="Bookmark">{props.number}</p>
    )
}

export default Bookmark; 