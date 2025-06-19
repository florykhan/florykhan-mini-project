import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://github.com/florykhan" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="github.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/ilian-khankhalaev" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:florykhan@gmail.com" title="Email">
          <img src="email.png" alt="Email" />
        </a>
        <a href="https://www.instagram.com/florykhan/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <img src="instagram.png" alt="Instagram" />
        </a>
        <a href="https://x.com/florykhan_" target="_blank" rel="noopener noreferrer" title="Twitter">
          <img src="twitter.png" alt="Twitter" />
        </a>
      </div>
      <p style={{ marginTop: "10px" }}>© 2025 Ilian Khankhalaev. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  padding: '10px 20px',
  textAlign: 'center',
};

const textStyle = {
  margin: 0,
  fontSize: '14px',
  color: '#333',
};

export default Footer;
