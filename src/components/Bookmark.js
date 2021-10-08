import React from 'react'; 
import './Bookmark.css'; 

function Bookmark(props){
    return(
        <p id={props.id} className="Bookmark">
            <div className="bookmarkLine" ></div>
            {props.number}
        </p>
    )
}

export default Bookmark; 