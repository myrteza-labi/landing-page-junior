import React from 'react'; 
import './Bookmark.css'; 

function Bookmark(props){
    return(
        <div id={props.id} className="Bookmark">
            <div className="bookmarkLine" ></div>
            <p>{props.number}</p>
        </div>
    )
}

export default Bookmark; 