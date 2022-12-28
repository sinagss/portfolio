import React from "react";
import "./certificates.css";
import { FaCertificate } from "react-icons/fa";

const cetificates = () => {
  return (
    <section id="certificates">
      <h5>What I've Learned</h5>
      <h2>Certificates & Workshops</h2>

      <div className="container certificates__container">
        <div className="certificates__content">
          {/* scrum certification */}
          <article className="certificate__details">
            <FaCertificate className="certificate__details-icon" />
            <div>
              <h4>Professional Scrum Master</h4>
              <small className="text-light">Certicate Holder</small>
            </div>
          </article>
          {/* PRINCE2 certification */}
          <article className="certificate__details">
            <FaCertificate className="certificate__details-icon" />
            <div>
              <h4>PRINCE2 Faundation</h4>
              <small className="text-light">Workshop Certification</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default cetificates;
