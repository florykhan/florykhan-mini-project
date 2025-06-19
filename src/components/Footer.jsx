import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2025 Ilian Khankhalaev. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#c4c4c4',       // same as navbar
  borderTop: '1px solid #ddd',      // matches navbar's bottom border
  padding: '10px 20px',
  textAlign: 'center',
};

const textStyle = {
  margin: 0,
  fontSize: '14px',
  color: '#333',
};

export default Footer;
