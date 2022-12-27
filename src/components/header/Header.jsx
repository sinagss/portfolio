import React from "react";
import "./header.css";
import CTA from "./CTA";
import HERO from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Maryam Tahbaz</h1>
        <h5 className="text-light">Data Scientist</h5>

        {/* Call To Action buttons */}
        <CTA />

        {/* Social Links */}
        <HeaderSocials />

        {/* Hero image */}
        <div className="hero">
          <img src={HERO} alt="Hero" />
        </div>

        {/* Scroll down link*/}
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
