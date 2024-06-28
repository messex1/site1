// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 My Future Canada Web App. All rights reserved.</p>
      <nav>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#faq">FAQ</a>
      </nav>
    </footer>
  );
};

export default Footer;
