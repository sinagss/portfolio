import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email */}
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>maryam.tahbaz65@gmail.com</h5>
            <a
              href="mailto:maryam.tahbaz65@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          {/* Telegram */}
          <article className="contact__option">
            <FaTelegramPlane />
            <h4>Telegram</h4>
            <h5>@maryamTbz</h5>
            <a href="https://t.me/maryamTbz" target={"_blank"} rel="noreferrer">
              Send a message
            </a>
          </article>

          {/* WhatsApp */}
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+989366730866</h5>
            <a
              href="https://wa.me/+989366730866"
              target={"_blank"}
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        {/* FORM */}
        <form action="" method="post">
          {/* NAME INPUT */}
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Full Name"
            aria-label="name"
            required
          />

          {/* COMPANY NAME */}
          <input
            type="text"
            name="companyName"
            id=""
            placeholder="Your Full Name"
            aria-label="company name"
          />

          {/* EMAIL INPUT */}
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            aria-label="email"
            required
          />

          {/* MESSAGE INPUT */}
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
