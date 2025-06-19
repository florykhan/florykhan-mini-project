import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div style={imageRow}>
        <img src="Ilian.jpg" alt="Ilian Khankhalaev" style={imageStyle} title="Ilian Khankhalaev"/>
        <a href="https://www.sfu.ca" target="_blank" rel="noopener noreferrer" title="SFU Website">
          <img src="SFU.jpg" alt="SFU Logo" style={logoStyle} />
        </a>
        <a href="https://drive.google.com/file/d/1-HTNzZiRZ03zXCsRYd6BR4RN6uaQ-pbp/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume">
          <img src="Resume2.png" alt="Download Resume" style={buttonStyle} />
        </a>
      </div>
      <div>
        <h2>
          <span style={{ fontWeight: 'normal' }}>Hi, I'm </span>
          <strong>Ilian Khankhalaev,</strong>
        </h2>
        <p>I’m a Computing Science student at Simon Fraser University, deeply passionate about AI, software development, and building tools that make life easier. With a multicultural background and a strong academic standing, I’m driven by curiosity, creativity, and the pursuit of meaningful work.</p>
        <p>
          My journey in tech began with Python and C++, and has grown to include modern tools like React, Git, and Vite. I enjoy solving complex problems, working on collaborative projects, and constantly learning new technologies.
          I’ve been recognized on the Dean’s Honour Roll and ranked in the top 5% of Computing Science students at SFU.
        </p>
        <p>
          Beyond academics, I’ve contributed to open-source projects, volunteered at tech events, and served as a peer educator. I believe that great software is built at the intersection of logic and empathy — and I’m excited to keep building, learning, and sharing.
        </p>

      </div>
    </section>
  );
}

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  padding: '40px',
};

const imageRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
};

const imageStyle = {
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '50%',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
};

const logoStyle = {
  width: '65px',
  height: 'auto',
};

const buttonStyle = {
  width: '140px',
  height: 'auto',
  marginLeft: '540px',
};

export default Hero;
