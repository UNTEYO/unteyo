import React, {useEffect} from 'react'
import { handleResponsive } from '../../../../handleResponsive'
import Card from './Card'
import TaketheTrash from "../../../../assets/takethetrash.png"
import "./Carousel.css"

function Carousel() {
    const {windowWidth, tampilanMobile} = handleResponsive()
      
        useEffect(() => {
          console.log(`Lebar sekarang: ${windowWidth}`); 
          console.log(`Tampilan mobile: ${tampilanMobile}`);
        }, [windowWidth, tampilanMobile])
    
    
  return (
    <div>
       <Carousel
       img = {TaketheTrash}
       ></Carousel>
    </div>
  )
}

export default Carousel