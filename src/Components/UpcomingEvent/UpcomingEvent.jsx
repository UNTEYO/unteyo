import React, {useEffect} from 'react'
import { handleResponsive } from '../../handleResponsive'
import img from "../../assets/galeryoflife.png"
import logo2 from "../../assets/logo2.png"
import "./UpcomingEvent.css"

function UpcomingEvent() {
    const { windowWidth, tampilanMobile } = handleResponsive();
    
      useEffect(() => {
        console.log(`Lebar sekarang: ${windowWidth}`);
        console.log(`Tampilan mobile: ${tampilanMobile}`);
      }, [windowWidth, tampilanMobile]);
  return (
    <div className={`containerUpcomingEvent ${
        tampilanMobile ? "mobile-containerUpcomingEvent" : "containerUpcomngEvent"
    }`}>
        <h2 className={`judulUpcomingEvent ${
            tampilanMobile ? "mobile-judulUpcomingEvent" : "judulUpcomingEvent"
        }`}>
            Upcoming Event
        </h2>
        <div className={`containerIsi ${
            tampilanMobile ? "mobile-containerIsi" : "containerIsi"
        }`}>
            <div className={`containerInfoIsi ${
                tampilanMobile ? "mobile-containerInfoIsi" : "containerInfoIsi"
            }`}>
                <img className={`logoInfoIsi ${
                    tampilanMobile ? "mobile-logoInfoIsi" : "logoInfoIsi"
                }`} src={logo2}></img>
                <div className={`containerInfo-2 ${
                    tampilanMobile ? "mobile-containerInfo-2" : "containerInfo-2"
                }`}>
                    <h3 className={`judulInfoIsi ${
                        tampilanMobile ? "mobile-judulInfoIsi" : "judulInfoIsi"
                    }`}>Galery of Life: Ekspresi Dari Melukis</h3>
                    <div className={`containerDateLoc ${
                        tampilanMobile ? "mobile-containerDateLoc" : "containerDateLoc"
                    }`}>
                    <h4>Date</h4>
                    <p>JAN 10 2025</p>
                    <h4>Location</h4>
                    <p>Taman Kampus 1 UTY</p>
                    </div>
                    <div className={`containerBtn ${
                        tampilanMobile ? "mobile-containerBtn" : "containerBtn"
                    }`}>
                        <button className={`btn ${
                            tampilanMobile ? "mobile-btn" : "btn"
                        }`}>More Info</button>
                        <button className={`btn ${
                            tampilanMobile ? "mobile-btn" : "btn"
                        }`}>Buy Now</button>
                    </div>
                    <p className={`cta ${
                        tampilanMobile ? "mobile-cta" : "cta"
                    }`}>&quot;Ekspresikan Kreativitasmu di Galery of Life&quot;</p>
                </div>
            </div>
            <div className={`containerImg ${
                tampilanMobile ? "mobile-containerImg" : "containerImg"
            }`}>
                <img className={`img ${
                    tampilanMobile ? "mobile-img" : "img"
                }`} src={img}></img>
                <div className={`backgroundImg ${
                    tampilanMobile ? "mobile-backgroundImg" : "backgroundImg"
                }`}></div>
            </div>
        </div>
    </div>
  )
}

export default UpcomingEvent