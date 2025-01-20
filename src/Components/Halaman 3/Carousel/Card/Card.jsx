import React, {useEffect} from 'react'
import { handleResponsive } from '../../../../handleResponsive'

function Card({img, judul, date1, date2, loc1, loc2, link}) {
    const {windowWidth, tampilanMobile} = handleResponsive()
          
            useEffect(() => {
              console.log(`Lebar sekarang: ${windowWidth}`); 
              console.log(`Tampilan mobile: ${tampilanMobile}`);
            }, [windowWidth, tampilanMobile])

  return (
    <div className={`cardHalaman3 ${
        tampilanMobile ? "mobile-cardHalaman3" : "cardHalaman3"
    }`}>
        <img src={img}
        className={`imgcradHalaman3 ${
            tampilanMobile ? "imgcardHalaman3" : "imgcardHalaman3"
        }`}></img>
        <div className={`infocardHalaman3 ${
            tampilanMobile ? "mobile-infocardHalaman3" : "infocardHalaman3"
        }`}>
            <h3 className={`judulcardHalaman3 ${
                tampilanMobile ? "mobile-judulcardHalaman3" : "judulcardHalaman3"
            }`}>{judul}</h3>
            <div className={`dateloc ${
                tampilanMobile ? "mobile-dateloc" : "dateloc"
            }`}>
                <h4 className={`date1 ${
                    tampilanMobile ? "mobile-date1" : "date1"
                }`}>{date1}</h4>
                <p className={`date2 ${
                    tampilanMobile ? "mobile-date2" : "date2"
                }`}>{date2}</p>
                <h4 className={`loc1 ${
                    tampilanMobile ? "mobile-loc1" : "loc1"
                }`}>{loc1}</h4>
                <p className={`loc2 ${
                    tampilanMobile ? "mobile-loc2" : "loc2"
                }`}>{loc2}</p>
            </div>
            <button className={`btninfo ${
                tampilanMobile ? "mobile-btninfo" : "btninfo"
            }`} href={link}></button>
        </div>
    </div>
  )
}

export default Card;