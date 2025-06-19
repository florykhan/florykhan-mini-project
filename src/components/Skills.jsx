import React from 'react';

function Skills() {
  return (
    <section id="skills" className="section section-grey skills-tight">
      <h2 className="center-heading">Skills</h2>
      <div className="skills-grid">
        <div className="skill-box">
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>Tailwind (basic)</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Linux Terminal</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
