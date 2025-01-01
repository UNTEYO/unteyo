import React from 'react'
import Like from "../../assets/like.png"
import Love from "../../assets/love.png"
import Spiral from "../../assets/spiral.png"
import "./Decor.css"

function Decor() {
  return (
    <div>
      <img src={Like} className='likeDecor'></img>
      <img src={Love} className='loveDecor'></img>
      <img src={Spiral} className='spiralDecor'></img>
    </div>
  )
}

export default Decor