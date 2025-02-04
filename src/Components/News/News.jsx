// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react'
import {handleResponsive} from "../../handleResponsive"
import CardNews from './cardNews'
import News1 from "../../assets/News/News1.jpg"
import "./News.css"

function News() {
    const { windowWidth, tampilanMobile } = handleResponsive();

    useEffect(() => {
        console.log(`Lebar sekarang: ${windowWidth}`);
        console.log(`Tampilan mobile: ${tampilanMobile}`);
    }, [windowWidth, tampilanMobile]);

    return (
        <div className={`containerNews-page ${
            tampilanMobile ? "mobile-containerNews-page" : "containerNews-page"
        }`}>
            <h2 className={`judulNews ${
                tampilanMobile ? "mobile-judulNews" : "judulNews"
            }`}>Popular News</h2>
            <section className={`containerNews ${
                tampilanMobile ? "mobile-containerNews" : "containerNews"
            }`}>
                <CardNews img={News1} link="any"/>
            </section>
        </div>
    )
}

export default News;
