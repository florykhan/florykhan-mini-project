import React from 'react';

function Skills() {
  return (
    <section id="skills" className="section section-grey skills-tight">
      <h2 className="center-heading">Skills</h2>

      <div className="projects-grid">
        <div className="project-card no-hover">
          <img src="languages.png" alt="Languages Icon" className="project-image" />
          <div className="project-content">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

        <div className="project-card no-hover">
          <img src="frameworks.png" alt="Frameworks Icon" className="project-image" />
          <div className="project-content">
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>

        <div className="project-card no-hover">
          <img src="tools.png" alt="Tools Icon" className="project-image" />
          <div className="project-content">
            <h3>Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Linux Terminal</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
