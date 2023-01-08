import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import TrackVisibility from "react-on-screen";
import Typewriter from "typewriter-effect";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header id="home">
      <div className="container container_all">
        <HeaderSocials />
        <div className="container header__container">
          <h2>Hello I'm</h2>
          <h1 className="hero-name">Maryam Tahbaz</h1>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  "A Project Manager",
                  "A Data Analyst",
                  "And a T-SQL Expert",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 800,
              }}
            />
          </div>

          {/* Call To Action buttons */}
          <CTA />

          {/* Social Links */}
        </div>
        <div className="side-buttons">
          {/* Scroll down link*/}
          <a
            href="#contact"
            className="scroll__down >"
            onClick={() => setActiveNav("#contact")}
          >
            Scroll Down {">"}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
