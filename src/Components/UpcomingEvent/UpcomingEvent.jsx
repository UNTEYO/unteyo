import React, {useEffect} from 'react'
import { handleResponsive } from '../../handleResponsive'
import img from "../../assets/galeryoflife.png"
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
            <img className={`imgUpcomingEvent ${
                tampilanMobile ? "mobile-imgUpcomingEvent" : "imgUpcomingEvent"
            }`} src={img}></img>
            <div className={`containerInfoEvent ${
                tampilanMobile ? "mobile-containerInfoEvent" : "containerInforEvent"
            }`}>
            <h3>Galery of Life: Ekspresi Dari Melukis</h3>
            <h3>Date</h3>
            <p>JAN 17 2025</p>
            <h3>Location</h3>
            <p>Taman Kampus 1 UTY</p>
            <button>More Info</button>
            <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default UpcomingEvent