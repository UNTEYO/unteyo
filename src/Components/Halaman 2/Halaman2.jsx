import React from 'react'
import CreativeMedia from "../../assets/CDhal3.png"
import Movement from "../../assets/Mhal3.png"
import SharingSession from "../../assets/SShal3.png"
import SocialEducation from "../../assets/SEhal3.png"
import ShortCourse from "../../assets/SChal3.png"
import "./Halaman2.css"

function Halaman2() {
  return (
    <div className='containerHalaman2'>
      <h2 className='judulHalaman2'>Our Program</h2>
    <section className='ContainerisiHalaman2'>
        <div className='isiHalaman2'>
            <img className='imgHal2' src={CreativeMedia}></img>
            <h3 className=''>Creative Media</h3>
        </div>
        <div className='isiHalaman2'>
            <img className='imgHal2' src={Movement}></img>
            <h3 className=''>Movement</h3>
        </div>
        <div className='isiHalaman2'>
            <img className='imgHal2' src={SharingSession}></img>
            <h3 className=''>Sharing Session</h3>
        </div>
        <div className='isiHalaman2'>
            <img className='imgHal2' src={SocialEducation}></img>
            <h3 className=''>Social Education</h3>
        </div>
        <div className='isiHalaman2'>
            <img className='imgHal2' src={ShortCourse}></img>
            <h3 className=''>Short Course</h3>
        </div>
    </section>
    </div>
  )
}

export default Halaman2