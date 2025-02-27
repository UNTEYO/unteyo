import React, { useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".containerHeader");
      const Logo = document.querySelector(".logoHeader")
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
        Logo.classList.add("scrolledLogo")
      } else {
        header.classList.remove("scrolled");
        Logo.classList.remove("scrolledLogo")
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  function onNav() {
    const navbar = document.querySelector(".navbarHeader");
    const navClose = document.querySelector(".navClose");

    navbar.style.transform = "translateY(0)";
    navClose.style.transform = "translateY(0)";
    navbar.style.transition = "0.5s";
    navClose.style.transition = "0.5s";
  }

  function outNav() {
    const navbar = document.querySelector(".navbarHeader");
    const navClose = document.querySelector(".navClose");
    navbar.style.transform = "translateY(-50rem)";
    navClose.style.transform = "translateY(-30rem)";
    navbar.style.transition = "0.5s";
    navClose.style.transition = "0.5s";
  }

  return (
    <div
      className="containerHeader"
    >
      <FontAwesomeIcon
        icon={faBars}
        className="hamburgerHeader"
        onClick={onNav}
      />
      <img
        src={Logo}
        className="logoHeader"
      ></img>
      <ul
        className="navbarHeader"
      >
        <li className="li-header">About Us</li>
        <li className="li-header">Program</li>
        <li className="li-header">News</li>
        <li className="li-header">Contact Us</li>
      </ul>
      <div className="navClose">
        <FontAwesomeIcon icon={faBars}
        className="hamburgerClose"
        onClick={outNav}
        ></FontAwesomeIcon>
        <img src={Logo} className="logoClose"></img>
      </div>
    </div>
  );
}

export default Header;
