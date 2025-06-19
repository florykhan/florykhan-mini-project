import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2 className="center-heading">Projects</h2>

      <div className="projects-grid">
        <a
          href="https://github.com/CMPT-276-SUMMER-2025/final-project-9-pines"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          <div className="project-card">
            <img src="project1.png" alt="Workout Tracker" className="project-image" />
            <div className="project-content">
              <h3>Workout Tracker</h3>
              <p>A simple voice-based workout tracker that converts your speech into structured tables using Next.js and OpenAI API.</p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/florykhan/study-scheduler"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          <div className="project-card">
            <img src="project2.png" alt="Study Scheduler" className="project-image" />
            <div className="project-content">
              <h3>Study Scheduler</h3>
              <p>A Python script that helps students plan study time based on class difficulty and energy levels.</p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/florykhan/florykhan.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          <div className="project-card">
            <img src="project3.png" alt="Portfolio Website" className="project-image" />
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>This very website — built with React, styled with CSS, and deployed via GitHub Pages.</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
