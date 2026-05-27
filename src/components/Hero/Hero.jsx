// import React from "react";
import "./Hero.css";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

import { ReactTyped } from "react-typed";

const Hero = ({ setIsContactOpen }) => {
  return (
    <section className="hero" id="home">

      <ParticlesBackground />

      {/* Left Content */}

      <div className="hero-content">

        {/* Hero Name */}

        <h1 
          className="hero-name"
          data-text="LOKESH KUMAR S">
          LOKESH KUMAR S
        </h1>

        {/* Typing Greeting */}

        <h3 className="hero-greeting">
          <ReactTyped
            strings={[
              "Hi, I am a Full Stack Developer..."
            ]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </h3>

        {/* Description */}

        <p className="hero-description">
          Passionate about building scalable web applications and creating modern digital experiences using MERN Stack, Java, and Python. Focused on backend development, problem-solving, and continuous learning while exploring innovative technologies and developing efficient, user-centric solutions for real-world applications.
        </p>

        {/* Buttons */}

        <div className="hero-buttons">

          <a href="/" className="primary-btn">
            View Resume
          </a>

          <a className="secondary-btn" onClick={() => setIsContactOpen(true)} style={{ cursor: "pointer" }}>
            Contact Me
          </a>

        </div>

      </div>

      {/* Right Visual */}

      <div className="hero-image">

        <div className="image-container">

          <div className="glow"></div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="Developer Illustration"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;