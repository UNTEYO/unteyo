import React, { useEffect } from 'react'
import "./Halaman1.css"
import laptopHal1 from "../../assets/laptopHal1.png"
import { handleResponsive } from '../../handleResponsive'

function Halaman1() {
  const {windowWidth, tampilanMobile} = handleResponsive()

  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`); 
    console.log(`Tampilan mobile: ${tampilanMobile}`);
  }, [windowWidth, tampilanMobile])

  return (
    <div className={`containerHalaman1 ${
      tampilanMobile ? "mobile-containerHalaman1" : "containerHalaman1"
    }`}>
        <section className={`isiHalaman1 ${
          tampilanMobile ? "mobile-isiHalaman1" : "isiHalaman1"
        }`}>
            <h2 className={`headingHalaman1 ${
              tampilanMobile ? "mobile-headingHalaman1" : "headingHalaman1"
            }`}>What is Unteyo Journey?</h2>
            <p className={`pHalaman1 ${
              tampilanMobile ? "mobile-pHalaman1" : "pHalaman1"
            }`}>Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.</p>
            <p className={`pHalaman1 ${
              tampilanMobile ? "mobile-pHalaman1" : "pHalaman1"
            }`}>Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.</p>
        </section>
        <img className={`imgHalaman1 ${
          tampilanMobile ? "mobile-imgHalaman1" : "imgHalaman1"
        }`} src={laptopHal1}></img>
    </div>
  )
}

export default Halaman1