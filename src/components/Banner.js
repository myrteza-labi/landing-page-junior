import React from 'react'; 
import './Banner.css'; 
import bannerImg from '../images/tablet/image-hero.png'; 

function Banner(props){
    return(
        <img src={bannerImg} alt="photo de face de plusieurs personnes" className="Banner"/>
    )
}

export default Banner; 