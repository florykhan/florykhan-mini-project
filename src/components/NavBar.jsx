import React from 'react';

function NavBar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #ddd',
  padding: '10px 20px',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'center',
  gap: '30px',
  margin: 0,
  padding: 0
};

export default NavBar;
