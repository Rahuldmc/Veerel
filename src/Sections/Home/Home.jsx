import React, { useState, useEffect } from "react";
import bgvideo from "../../Assets/moon_-_116594 (Original).mp4";
import logo from "../../Assets/Veerel Logo New V1 White.png";
import { Carousel } from "antd";
import { Link as ScrollLink } from "react-scroll";
import { Icon } from "@iconify/react";
import "./Home.css";
import AboutUs from "../About/About";
import History from "../History/History";
import Projects from "../Project/Projects";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Clients from "../Clients/Clients";
import Footer from "../Footer/Footer";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', function () {
      let video = document.querySelector('.bgvid-parallax');
      let scroll = window.scrollY;
      video.style.transform = 'translate(-50%, -50%) translateY(' + scroll * 0.5 + 'px)';
    });
  }, []);

  const carouselContent = [
    {
      title: "Illuminate",
      text: "We create awe-inspiring visual experiences that transform spaces and captivate audiences.",
    },
    {
      title: "Captivate",
      text: "Our designs evoke emotions, keeping your audience engaged and spellbound.",
    },
    {
      title: "Resonate",
      text: "We leave a lasting impact by crafting memorable moments and unforgettable experiences.",
    },
  ];

  return (
    <div>
      <div className="home">
        {/* Background Video with Parallax Effect */}
        <video
          className="bgvid"
          src={bgvideo}
          autoPlay
          loop
          muted
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            filter: scrollY > 1000 ? "brightness(70%)" : "brightness(50%)"
          }}
        ></video>

        {/* Navbar */}
        <nav className="navbar">
          <img src={logo} alt="Veerel Logo" className="logo" />

          {/* Mobile Menu Button */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <Icon
              icon={isMobileMenuOpen ? "ep:close-bold" : "mingcute:menu-fill"}
              color="#ffffff"
              width="30"
            />
          </div>

          {/* Desktop and Mobile Navigation Links */}
          <ul
            className={`nav-links ${isMobileMenuOpen ? "nav-links-mobile-open" : ""
              }`}
          >
            {["home", "about", "history", "projects", "products", "clients", "contact"].map(
              (section) => (
                <li key={section}>
                  <ScrollLink
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                    onClick={closeMenu}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                </li>
              )
            )}
          </ul>

        </nav>

        {/* Main Content */}
        <div className="content">
          {/* Carousel Section */}
          <Carousel autoplay dotPosition="bottom" className="carousel">
            {carouselContent.map((item, index) => (
              <div key={index} className="carousel-slide">
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </Carousel>

          {/* Supporting Text */}
          <p className="subtext">
            Illuminate spaces, captivate minds, and resonate emotions with our
            mastery of light, sound, and projection.
          </p>

          {/* Call-to-Action Button */}
          <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <button className="cta-button">Explore About Us</button>
          </ScrollLink>
        </div>

        {/* Other Sections */}

      </div>
      <div id="about">
        <AboutUs />
      </div>

      <div id="history">
        <History />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="products">
        <Products />
      </div>
      <div id="clients">
        <Clients />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
