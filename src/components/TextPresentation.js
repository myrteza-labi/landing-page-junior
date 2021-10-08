import React from 'react'; 
import './TextPresentation.css'; 

function TextPresentation(props){
    return(
        <div className="TextPresentation">
            <h3 className="textPresentationSlogan" >Built for modern use</h3>
            <h2 className="textPresentationTitle" >Smarter meetings, all in one place</h2>
            <p className="textPresentationParagraph" >
                Send messages, share files, show your screen, and record your meetings — all in one 
                workspace. Control who can join with invite-only team access, data encryption, and data export.
            </p>
        </div>
    )
}

export default TextPresentation; 