import React from 'react'; 
import './TextIntroduction.css'; 

function TextIntroduction(props){
    return(
        <div className="TextIntroduction">
            <h1 className="textIntroductionTitle">Group chat<br/> for Everyone</h1>
            <p className="textIntroductionParagraph">Meet makes it easy to connect with others 
                face-to-face virtually and collaborate across 
                any device.
            </p>
        </div>
    )
}

export default TextIntroduction; 