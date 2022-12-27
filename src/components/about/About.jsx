import React from "react";
import "./about.css";
import ABOUT from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      {/* Picture of Hero for about section */}
      <div className="about__me-image">
        <img src={ABOUT} alt="About" />
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
            <small>12 Clients</small>
          </article>

          {/* Projects Card */}
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>30+ Completed Projects</small>
          </article>
        </div>
        {/* Details Paragraph */}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          excepturi modi doloribus enim, nisi possimus fugit veritatis impedit
          voluptatem at dolor nemo corrupti, qui praesentium cumque voluptate
          officiis. Suscipit, mollitia?
        </p>

        {/* Contact Button */}
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
