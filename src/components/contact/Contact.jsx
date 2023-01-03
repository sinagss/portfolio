import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

// import { emailjs } from "emailjs-com";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qp4xiaf",
        "template_azcprd3",
        form.current,
        "02H5cSnnGKJUh1OXB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email */}
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
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
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@maryamTbz</h5>
            <a href="https://t.me/maryamTbz" target={"_blank"} rel="noreferrer">
              Send a message
            </a>
          </article>

          {/* WhatsApp */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
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
        <form ref={form} onSubmit={sendEmail}>
          {/* NAME INPUT */}
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            aria-label="name"
            required
          />

          {/* COMPANY NAME */}
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Your company name"
            aria-label="company name"
          />

          {/* EMAIL INPUT */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            aria-label="email"
            required
          />

          {/* MESSAGE INPUT */}
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            aria-label="Message"
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
