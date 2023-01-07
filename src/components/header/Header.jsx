import React, { useState } from "react";
import "./header.css";
import CTA from "./CTA";
import HERO from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div className="type_container">
          <h1 className="typed">Maryam Tahbaz</h1>
        </div>
        <h5 className="text-light">Data Analyst</h5>

        {/* Call To Action buttons */}
        <CTA />

        {/* Social Links */}
        <HeaderSocials />

        {/* Hero image */}
        <div className="hero">
          <img src={HERO} alt="Hero" />
        </div>

        {/* Scroll down link*/}
        <a
          href="#contact"
          className="scroll__down >"
          onClick={() => setActiveNav("#contact")}
        >
          Scroll Down {">"}
        </a>
      </div>
    </header>
  );
};

export default Header;
