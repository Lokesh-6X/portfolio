// import React from "react";
import "./Projects.css";

const Projects = () => {

  return (

    <section className="projects-section" id="projects">

      {/* Heading */}

      <div className="projects-heading">

        <p className="projects-mini">
          DEVELOPMENT RECORDS
        </p>

        <h1>{"< PROJECT ARCHIVE />"}</h1>

        <p className="projects-subtitle">
          Innovative applications and systems focused on
          backend architecture and modern full stack development.
        </p>

      </div>

      {/* Projects Container */}

      <div className="projects-container">

        {/* PROJECT 1 */}

        <div className="project-card">

          {/* LEFT */}

          <div className="project-content">

            <p className="project-category">
              Backend Development
            </p>

            <h2>
              Contact Management Application
            </h2>

            <p className="project-description">
              A backend-focused application designed to
              manage contacts efficiently with CRUD operations,
              structured database handling, and scalable architecture.
            </p>

            {/* Tech Stack */}

            <div className="project-tags">

              <span>Java</span>
              <span>MySQL</span>
              <span>JDBC</span>

            </div>

            {/* Button */}

            <button className="project-btn">
              ACCESS SYSTEM
            </button>

          </div>

          {/* RIGHT */}

          <div className="project-visual">

            <div className="project-screen">

              <div className="screen-header">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="screen-content">

                <p>{"> Initializing Contact System..."}</p>
                <p>{"> Database Connected"}</p>
                <p>{"> CRUD Operations Active"}</p>

              </div>

            </div>

          </div>

        </div>

        {/* PROJECT 2 */}

        <div className="project-card reverse">

          {/* LEFT */}

          <div className="project-visual">

            <div className="project-screen">

              <div className="screen-header">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="screen-content">

                <p>{"> Library Records Loaded"}</p>
                <p>{"> Book Management Active"}</p>
                <p>{"> Tracking System Online"}</p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="project-content">

            <p className="project-category">
              Backend Development
            </p>

            <h2>
              Library Management Application
            </h2>

            <p className="project-description">
              A database-driven system developed for managing
              books, issue tracking, and library records with
              efficient backend logic and structured workflows.
            </p>

            <div className="project-tags">

              <span>Java</span>
              <span>MySQL</span>
              <span>Database Design</span>

            </div>

            <button className="project-btn">
              ACCESS SYSTEM
            </button>

          </div>

        </div>

        {/* PROJECT 3 */}

        <div className="project-card featured">

          {/* LEFT */}

          <div className="project-content">

            <p className="project-category">
              Full Stack Development
            </p>

            <h2>
              Expense Management Application
            </h2>

            <p className="project-description">
              A modern full stack web application for tracking
              expenses, monitoring financial activity, and
              visualizing spending analytics through an
              interactive dashboard interface.
            </p>

            <div className="project-tags">

              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>

            </div>

            <button className="project-btn">
              OPEN PROJECT
            </button>

          </div>

          {/* RIGHT */}

          <div className="project-visual">

            <div className="dashboard-preview">

              <div className="chart"></div>

              <div className="dashboard-cards">

                <div></div>
                <div></div>
                <div></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;