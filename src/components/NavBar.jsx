import React from 'react';

function NavBar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
<<<<<<< HEAD
        {links.map((link, index) => (
          <li
            key={link.name}
            style={{
              ...liStyle,
              borderRight: index !== links.length - 1 ? '1px solid #fff' : 'none'
            }}
          >
            <a href={link.href} style={aStyle}>{link.name}</a>
          </li>
        ))}
=======
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
>>>>>>> 232da2a8062144c115374b5e1be7450bb6914a4b
      </ul>
    </nav>
  );
}

<<<<<<< HEAD
const links = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const navStyle = {
  backgroundColor: '#c4c4c4',
=======
const navStyle = {
  backgroundColor: '#ffffff',
>>>>>>> 232da2a8062144c115374b5e1be7450bb6914a4b
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
<<<<<<< HEAD
  alignItems: 'center',
=======
>>>>>>> 232da2a8062144c115374b5e1be7450bb6914a4b
  gap: '30px',
  margin: 0,
  padding: 0
};

<<<<<<< HEAD
const liStyle = {
  paddingRight: '20px',
};

const aStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500'
};

export default NavBar;
=======
export default NavBar;
>>>>>>> 232da2a8062144c115374b5e1be7450bb6914a4b
