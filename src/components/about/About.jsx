import React from "react";
import "./about.css";
import ABOUT from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import handleViewport from "react-in-viewport";

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  const className = inViewport
    ? "about__me-image__animated"
    : "about__me-image";
  return (
    <div className="viewport-block" ref={forwardedRef}>
      <div className={className}>
        <img src={ABOUT} alt="About" />
      </div>
    </div>
  );
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

const Component = (props) => (
  <div>
    <ViewportBlock
      onEnterViewport={() => console.log("enter")}
      onLeaveViewport={() => console.log("leave")}
    />
  </div>
);

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      {/* Picture of Hero for about section */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Component />
          </div>
        </div>

        {/* About Cards */}
        <div className="about__content">
          <div className="about__cards">
            {/* Experience Card */}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>12+ Years Working</small>
            </article>

            {/* Clients Card */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Clients</small>
            </article>

            {/* Projects Card */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>200+ Completed Projects</small>
            </article>
          </div>
          {/* Details Paragraph */}
          <p>
            I'm a versatile professional and Professional Scrum Master with 12+
            years’ experience, including 6 years’ managing projects of all
            sizes, developing key deliverables, and driving project success.
            Excels at taking on extreme challenges, navigating organizational
            dynamics, and forecasting and dismantling roadblocks to success.
            Demonstrated expertise in using extremely large, complex data sets
            to draw conclusions and effectively communicate findings with
            technical, non-technical audiences and stakeholders.
          </p>

          {/* Contact Button */}
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
