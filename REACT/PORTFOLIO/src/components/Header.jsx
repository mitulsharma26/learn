// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <h2 className="logo">Logo</h2>
    <nav className="navigation">
      <a href="#" className="active">Home</a>
      <a href="#">About</a>
      <a href="#">Service</a>
      <a href="#">Contact</a>
    </nav>
  </header>
);

export default Header;
