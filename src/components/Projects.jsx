import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Workout Tracker</h3>
        <p>A simple voice-based workout tracker that converts your speech into structured tables using Next.js and OpenAI API.</p>
        <a href="https://github.com/CMPT-276-SUMMER-2025/final-project-9-pines" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>

      <div className="project-card">
        <h3>Study Scheduler</h3>
        <p>A Python script that helps students plan study time based on class difficulty and energy levels.</p>
        <a href="https://github.com/florykhan/study-scheduler" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>

      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>
          This very website — created with React, styled in CSS, and hosted on GitHub Pages.
          Demonstrates clean Git practices, component structure, and deployment.
        </p>
        <a href="https://github.com/florykhan/florykhan.github.io.git" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </section>

    
  );
}

export default Projects;
