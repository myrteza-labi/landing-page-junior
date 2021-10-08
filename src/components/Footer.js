import React from 'react'; 
import './Footer.css'; 
import Bookmark from './Bookmark'; 


function Footer(props){
    return(
        <footer className="Footer">
            <Bookmark number={"02"} />
            <h2 className="footerTitle" >Experience more together</h2>
            <p className="footerParagraph" >  
                Stay connected with reliable HD meetings and unlimited 
                one-on-one and group video sessions.
            </p>
            {props.children}
        </footer>
    )
}

export default Footer; 