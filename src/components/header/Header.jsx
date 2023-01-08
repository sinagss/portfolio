import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import TrackVisibility from "react-on-screen";

const Header = () => {
  const initialDelta = 190;
  const useEfectIntervar = 500;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "A Project Manager",
    "A Data Analyst",
    "And a T-SQL Expert",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(initialDelta);
  const period = 110;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, initialDelta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => period);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);

      setDelta(initialDelta);
    }
  };

  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header id="home">
      <div className="container_all">
        <HeaderSocials />
        <div className="container header__container">
          <h2>Hello I'm</h2>
          <h1 className="hero-name">Maryam Tahbaz</h1>
          <TrackVisibility>
            <h1 className="hero-skills">
              {text}
              <span className="carret"></span>
            </h1>
          </TrackVisibility>

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
