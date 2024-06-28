// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;
