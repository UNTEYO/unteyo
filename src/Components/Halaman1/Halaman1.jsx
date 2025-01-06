import React from 'react'
import "./Halaman1.css"
import laptopHal1 from "../../assets/laptopHal1.png"

function Halaman1() {
  return (
    <div className='containerHalaman1'>
        <section className='isiHalaman1'>
            <h2 className='headingHalaman1'>What is Unteyo Journey?</h2>
            <p className='pHalaman1'>Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.</p>
            <p className='pHalaman1'>Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.</p>
        </section>
        <img className='imgHalaman1' src={laptopHal1}></img>
    </div>
  )
}

export default Halaman1