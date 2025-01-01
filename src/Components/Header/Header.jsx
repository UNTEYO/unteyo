import React from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"

function Header() {
  return (
    <div className='containerHeader'>
        <img src={Logo} className='logoHeader'></img>
        <ul className='navbarHeader'>
            <li>About Us</li>
            <li>Program</li>
            <li>News</li>
            <li>Contact'Us</li>
        </ul>
    </div>
  )
}

export default Header