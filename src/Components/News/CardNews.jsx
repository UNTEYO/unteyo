import React, {useEffect} from 'react'
import {handleResponsive} from "../../handleResponsive"
import "./cardNews.css"

function CardNews(img, link) {
    const { windowWidth, tampilanMobile } = handleResponsive();
    
    useEffect(() => {
        console.log(`Lebar sekarang: ${windowWidth}`);
        console.log(`Tampilan mobile: ${tampilanMobile}`);
    }, [windowWidth, tampilanMobile]);

    return (
        <div className={`cardNews ${
            tampilanMobile ? "mobile-cardNews" : "cardNews"
        }`}>
            <img className={`imgNews ${
                tampilanMobile ? "mobile-imgNews" : "imgNews"
            }`} src={img} alt="News" />
            <div className={`infoNews ${
                tampilanMobile ? "mobile-infoNews" : "infoNews"
            }`}>
                <a className={`btnNews ${
                    tampilanMobile ? "mobile-btnNews" : "btnNews"
                }`} href={link}> Read More</a>
            </div>
        </div>
    )
}

export default CardNews;
