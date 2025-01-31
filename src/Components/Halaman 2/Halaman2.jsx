import React, {useEffect} from 'react'
import CreativeMedia from "../../assets/CDhal3.png"
import Movement from "../../assets/Mhal3.png"
import SharingSession from "../../assets/SShal3.png"
import SocialEducation from "../../assets/SEhal3.png"
import ShortCourse from "../../assets/SChal3.png"
import {handleResponsive} from "../../handleResponsive"
import "./Halaman2.css"

function Halaman2() {
   const {windowWidth, tampilanMobile} = handleResponsive()
  
    useEffect(() => {
      console.log(`Lebar sekarang: ${windowWidth}`); 
      console.log(`Tampilan mobile: ${tampilanMobile}`);
    }, [windowWidth, tampilanMobile])

  return (
    <div className={`containerHalaman2 ${
      tampilanMobile ? "mobile-containerHalaman2" : "containerHalaman2"
    }`}>
      <h2 className={`judulHalaman2 ${
        tampilanMobile ? "mobile-judulHalaman2" : "judulHalaman2"
      }`}>Our Program</h2>
    <section className={`ContainerisiHalaman2 ${
      tampilanMobile ? "mobile-ContainerisiHalaman2" : "ContainerisiHalaman2"
    }`}>
        <div className={`isiHalaman2 ${
          tampilanMobile ? "mobile-isiHalaman2" : "isiHalaman2"
        }`}>
            <img className={`imgHal2 ${
              tampilanMobile ? "mobile-imgHal2" : "imgHal2"
            }`} src={CreativeMedia}></img>
            <h3 className=''>Creative Media</h3>
        </div>
        <div className={`isiHalaman2 ${
          tampilanMobile ? "mobile-isiHalaman2" : "isiHalaman2"
        }`}>
            <img className={`imgHal2 ${
              tampilanMobile ? "mobile-imgHal2" : "imgHal2"
            }`} src={Movement}></img>
            <h3 className=''>Movement</h3>
        </div>
        <div className={`isiHalaman2 ${
          tampilanMobile ? "mobile-isiHalaman2" : "isiHalaman2"
        }`}>
            <img className={`imgHal2 ${
              tampilanMobile ? "mobile-imgHal2" : "imgHal2"
            }`} src={SharingSession}></img>
            <h3 className=''>Sharing Session</h3>
        </div>
        <div className={`isiHalaman2 ${
          tampilanMobile ? "mobile-isiHalaman2" : "isiHalaman2"
        }`}>
            <img className={`imgHal2 ${
              tampilanMobile ? "mobile-imgHal2" : "imgHal2"
            }`} src={SocialEducation}></img>
            <h3 className=''>Social Education</h3>
        </div>
        <div className={`isiHalaman2 ${
          tampilanMobile ? "mobile-isiHalaman2" : "isiHalaman2"
        }`}>
            <img className={`imgHal2 ${
              tampilanMobile ? "mobile-imgHal2" : "imgHal2"
            }`} src={ShortCourse}></img>
            <h3 className=''>Short Course</h3>
        </div>
    </section>
    </div>
  )
}

export default Halaman2