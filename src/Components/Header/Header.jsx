import React, { useEffect } from "react";
import "./Header.css";
import { handleResponsive } from "../../handleResponsive";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`);
    console.log(`Tampilan mobile: ${tampilanMobile}`);
  }, [windowWidth, tampilanMobile]);

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
        <li>About Us</li>
        <li>Program</li>
        <li>News</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default Header;
