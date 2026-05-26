// import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      {/* Section Title */}

      <div className="skills-heading">

        <h1>{"< TECH ARSENAL />"}</h1>

        <p>
          Technologies and tools I use to build modern
          digital experiences.
        </p>

      </div>

      {/* Main Layout */}

      <div className="skills-container">

        {/* LEFT SIDE - CODE BOX */}

        <div className="code-box">

          {/* Window Header */}

          <div className="code-header">

            <div className="dots">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>

            <p>portfolio.js</p>

          </div>

          {/* Code Content */}

          <div className="code-content">

<pre>{`
const developer = {

  name: "Lokesh",

  role: "Full Stack Dev",

  skills: [
    "React",
    "Python",
    "Flask",
    "Java",
    "MySQL"
  ],

  passion: "Building
  futuristic digital
  experiences"
}
`}</pre>

          </div>

        </div>

        {/* RIGHT SIDE - SKILL CARDS */}

        <div className="skills-grid">

          {/* FRONTEND */}

          <div className="skill-card frontend">

            <h2>⚡ FRONTEND</h2>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Handlebars</span>
            </div>

          </div>

          {/* BACKEND */}

          <div className="skill-card backend">

            <h2>⚙ BACKEND</h2>

            <div className="skill-tags">
              <span>Python</span>
              <span>Flask</span>
              <span>Java</span>
              <span>REST APIs</span>
            </div>

          </div>

          {/* DATABASE */}

          <div className="skill-card database">

            <h2>💾 DATABASE</h2>

            <div className="skill-tags">
              <span>MySQL</span>
            </div>

          </div>

          {/* TOOLS */}

          <div className="skill-card tools">

            <h2>🛠 TOOLS</h2>

            <div className="skill-tags">
              <span>Git</span>
              <span>VS Code</span>
              <span>Figma</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;