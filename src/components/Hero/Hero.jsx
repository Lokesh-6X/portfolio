// import React from "react";
import "./Hero.css";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <ParticlesBackground />

      {/* Left Content */}

      <div className="hero-content">

      {/* Typing Greeting */}

      <h3 className="hero-greeting">
        <ReactTyped
          strings={[
            "Hi, I am Lokesh Kumar S..."
          ]}
          typeSpeed={70}
          backSpeed={40}
          loop
        />
      </h3>

      {/* Role */}

      <h1 className="hero-role">
        Full Stack Developer
      </h1>

      {/* Description */}

      <p className="hero-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque aspernatur voluptas ratione exercitationem
        numquam pariatur dicta unde dignissimos deleniti.
        Perspiciatis officiis magni quas minima repellendus
        architecto sapiente molestiae assumenda eveniet.
      </p>

      {/* Buttons */}

      <div className="hero-buttons">

        <a href="/" className="primary-btn">
          View Resume
        </a>

        <a href="#contact" className="secondary-btn">
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