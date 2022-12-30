import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* First service card */}
        <article className="service">
          <div className="service__head">
            <h3>Project Management</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Resource Coordination</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Process Improvement</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Agile and Scrum Methodologies</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Risk Mitigation</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Requirements Gathering and Analysis</p>
            </li>
          </ul>
        </article>

        {/* Sercond service card */}
        <article className="service">
          <div className="service__head">
            <h3>Leadership</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analytical Decision Making</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Communication</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Delegation</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Creative Problem-Solving</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-functional Team Leadership & Collaboration</p>
            </li>
          </ul>
        </article>
        
        {/* Third service card */}
        <article className="service">
          <div className="service__head">
            <h3>Data Analysis & Reporting</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Visualization & Dashboards</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and Creation of Management Reports</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Design and Management</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
