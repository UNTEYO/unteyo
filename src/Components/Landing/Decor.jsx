import React from 'react'
import Like from "../../assets/like.png"
import Love from "../../assets/love.png"
import Spiral from "../../assets/spiral.png"
import Spray1 from "../../assets/spray 1.png"
import Spray2 from "../../assets/spray 2.png"
import Spray3 from "../../assets/spray 3.png"
import "./Decor.css"

function Decor() {
  return (
    <div>
      <img src={Like} className='likeDecor'></img>
      <img src={Love} className='loveDecor'></img>
      <img src={Spiral} className='spiralDecor'></img>
      <div className="sprayDecor1"></div>
      <div className='sprayDecor1-1'></div>
      <div className='sprayDecor2'></div>
      <div className='sprayDecor2-2'></div>
      <div className='sprayDecor2-2-2'></div>
      {/* <img src={Spray1} className='spray1Decor'></img>
      <img src={Spray2} className='spray2Decor'></img>
      <img src={Spray3} className='spray3Decor'></img> */}
    </div>
  )
}

export default Decor