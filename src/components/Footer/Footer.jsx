// import React from "react";
import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Neon Top Border */}

      <div className="footer-line"></div>

      {/* Main Content */}

      <div className="footer-content">

        {/* Name */}

        <h1 className="footer-logo">
          LOKESH KUMAR S
        </h1>

        {/* Tagline */}

        <p className="footer-tagline">
          Building futuristic digital experiences.
        </p>

        {/* Social Links */}

        <div className="footer-socials">

          <a href="/">
            <FaGithub />
          </a>

          <a href="/">
            <FaLinkedin />
          </a>

          <a href="mailto:example@gmail.com">
            <FaEnvelope />
          </a>

          <a href="/">
            <FaFileAlt />
          </a>

        </div>

        {/* Terminal Line */}

        <p className="footer-terminal">
          {"> thanks_for_visiting();"}
        </p>

        {/* Bottom Text */}

        <p className="footer-copy">
          © 2026 • Built with React & Creativity
        </p>

      </div>

    </footer>
  );
};

export default Footer;