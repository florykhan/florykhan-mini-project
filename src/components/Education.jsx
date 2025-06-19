import React from 'react';

function Education() {
  return (
    <section id="education">
      <h2 className="center-heading">Education</h2>

      <h3>
        <a
          href="https://www.sfu.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover-underline"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Simon Fraser University  
          <img src="link.png" alt="External Link" style={{ width: '16px', height: '16px' }} />
        </a>
      </h3>
      <p>Bachelor of Computing Science (2024 – Present)</p>

      <div className="projects-grid">
        <div className="project-card no-hover">
          <div className="project-content">
            <h3>Academic Standing</h3>
            <ul>
              <li>Dean’s Honour Roll – Spring 2025</li>
              <li>Top 5% of Computing Science students (GPA 4.00/4.33)</li>
            </ul>
          </div>
        </div>
        
        <div className="project-card no-hover">
          <div className="project-content">
            <h3>Volunteer Experience</h3>
            <ul>
              <li>Hackathon Volunteer – SFU Hack Days 2025</li>
              <li>FIC Peer Educator – Summer 2024: Provided academic support in mathematics.</li>
            </ul>
         </div>
        </div>
      </div>
      

      <div className="projects-grid">
        <div className="project-card no-hover">
          <div className="project-content">
            <h3>Work Experience</h3>
            <ul>
              <li>Group Project Research – CMPT276: Contributed to the design and development of a voice-based workout tracker through research and implementation support.</li>
            </ul>
          </div>
        </div>
      </div>        

      <div className="projects-grid">
        <div className="project-card no-hover">
          <div className="project-content">
            <h3>Hobbies</h3>
              <p>🎹 I studied classical piano for 8 years at a dedicated music school in Russia and still enjoy playing regularly. My training instilled in me a deep appreciation for discipline, creativity, and performance.</p>
              <p>🏂 I'm an avid snowboarder and enjoy spending winter breaks on the slopes.</p>
              <p>🎾 I also play tennis recreationally and appreciate the focus and agility the sport demands.</p>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Education;