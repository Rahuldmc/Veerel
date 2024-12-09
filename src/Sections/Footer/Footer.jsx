import React from 'react';
import logo from '../../Assets/Veerel Logo New V1 White.png';
import "./Footer.css"

const Footer = () => {
  const handleLogoClick = () => {
    window.scrollTo(0, 0);  // Scroll to the top of the page (home section)
  };

  return (
    <div className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <p className="footer-description">
            At <strong>Veerel Enterprises</strong>, we specialize in delivering cutting-edge, custom solutions across technology, simulation, software development, automation, and immersive experiences. Our expertise spans industries including public sector, corporate, government initiatives, and more, ensuring every project is tailored to meet unique client needs.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-grid">
          <div className="footer-column">
            <h6>Solutions</h6>
            <ul>
              <li><a href="#lighting">Lighting</a></li>
              <li><a href="#sound">Sound</a></li>
              <li><a href="#arvr">AR/VR</a></li>
              <li><a href="#machinery">Machinery</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Support</h6>
            <ul>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#guides">Guides</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Company</h6>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Services</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#clients">Clients</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Legal</h6>
            <ul>
              <li><a href="#claim">Claim</a></li>
              <li><a href="#policy">Policy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trademark Section */}
      <div className="footer-trademark">
        <p>©{new Date().getFullYear() } <a href='www.veerelenterprises.com' style={{color:'#ccc', textDecoration:'none'}} >Veerel Enterprises.</a> All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
