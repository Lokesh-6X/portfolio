// import React from "react";
import "./ContactModal.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaTimes
} from "react-icons/fa";

const ContactModal = ({ isOpen, setIsOpen }) => {

  if (!isOpen) return null;

  return (

    <div className="contact-overlay">

      {/* Background Blur */}

      <div
        className="contact-backdrop"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal */}

      <div className="contact-modal">

        {/* Close Button */}

        <button
          className="close-btn"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {/* LEFT SIDE */}

        <div className="contact-left">

          <p className="contact-mini">
            CONNECTION ACTIVE
          </p>

          <h1 className="contact-title">
            GET <br />
            IN <br />
            TOUCH
          </h1>

          <p className="contact-subtitle">
            Let’s build futuristic digital experiences
            and innovative solutions together.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-right">

          {/* EMAIL */}

          <a
            href="mailto:example@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>example@gmail.com</p>
            </div>
          </a>

          {/* PHONE */}

          <a
            href="tel:+911234567890"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 12345 67890</p>
            </div>
          </a>

          {/* GITHUB */}

          <a
            href="/"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>

            <div>
              <h3>GitHub</h3>
              <p>github.com/lokesh</p>
            </div>
          </a>

          {/* LINKEDIN */}

          <a
            href="/"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaLinkedin />
            </div>

            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/lokesh</p>
            </div>
          </a>

        </div>

      </div>

    </div>
  );
};

export default ContactModal;