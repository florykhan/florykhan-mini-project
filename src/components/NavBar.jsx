import React from 'react';

function NavBar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
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
      </ul>
    </nav>
  );
}

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const navStyle = {
  backgroundColor: '#c4c4c4',
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
  alignItems: 'center',
  gap: '22px',
  margin: 0,
  padding: 0
};

const liStyle = {
  paddingRight: '20px',
};

const aStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '14px',
};

export default NavBar;
