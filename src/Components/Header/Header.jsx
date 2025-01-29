import React, { useEffect } from "react";
import "./Header.css";
import { handleResponsive } from "../../handleResponsive";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".containerHeader");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`);
    console.log(`Tampilan mobile: ${tampilanMobile}`);
  }, [windowWidth, tampilanMobile]);

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

    navbar.style.transform = "translateY(-35vh)";
    navClose.style.transform = "translateY(-49vh)";
    navbar.style.transition = "0.5s";
    navClose.style.transition = "0.5s";
  }

  return (
    <div
      className={`containerHeader ${
        tampilanMobile ? "mobile-header" : "contaierHeader"
      }`}
    >
      <FontAwesomeIcon
        icon={faBars}
        className={`hamburgerHeader ${
          tampilanMobile ? "mobile-hamburgerHeader" : "hamburgerHeader"
        }`}
        onClick={onNav}
      />
      <img
        src={Logo}
        className={`logoHeader ${
          tampilanMobile ? "mobile-logoHeader" : "logoHeader"
        }`}
      ></img>
      <ul
        className={`navbarHeader ${
          tampilanMobile ? "mobile-navbarHeader" : "navbarHeader"
        }`}
      >
        <li className="li-header">About Us</li>
        <li className="li-header">Program</li>
        <li className="li-header">News</li>
        <li className="li-header">Contact Us</li>
      </ul>
      <div className={`navClose ${
          tampilanMobile ? "mobile-navClose" : "navClose"
        }`}>
        <FontAwesomeIcon icon={faBars}
        className={`hamburgerClose ${
          tampilanMobile ? "mobile-hamburgerClose" : "hamburgerClose"
        }`}
        onClick={outNav}
        ></FontAwesomeIcon>
        <img src={Logo} className={`logoCloase ${
          tampilanMobile ? "mobile-logoClose" : "logoClose"
        }`}></img>
      </div>
    </div>
  );
}

export default Header;
