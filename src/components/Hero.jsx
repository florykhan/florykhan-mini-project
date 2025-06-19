import React from 'react';

function Hero() {
  return (
    <section id="hero">
      <div style={imageRow}>
        <img src="Ilian.jpg" alt="Ilian Khankhalaev" style={imageStyle} />
        <a href="https://www.sfu.ca" target="_blank" rel="noopener noreferrer" title="SFU Website">
          <img src="SFU.jpg" alt="SFU Logo" style={logoStyle} />
        </a>
        <a href="https://drive.google.com/file/d/1-HTNzZiRZ03zXCsRYd6BR4RN6uaQ-pbp/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume">
          <img src="Resume.png" alt="Download Resume" style={buttonStyle} />
        </a>
      </div>
      <div>
        <h2>
          <span style={{ fontWeight: 'normal' }}>Hi, I'm </span>
          <strong>Ilian Khankhalaev,</strong>
        </h2>
        <p>I'm a computing science student passionate about AI, software development, and building useful tools.</p>
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
  marginLeft: '600px',
};

export default Hero;
