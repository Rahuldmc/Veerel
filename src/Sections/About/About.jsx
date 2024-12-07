import React from "react";
import { Carousel } from "antd";
import { RocketOutlined, SafetyOutlined, ExpandOutlined, BulbOutlined } from "@ant-design/icons";
import "./About.css";
import A1 from "../../Assets/A1.jpg" 
import A2 from "../../Assets/A2.jpg" 
import A3 from "../../Assets/A3.jpg" 
import A4 from "../../Assets/A4.jpg" 

const AboutUs = () => {
  const uspData = [
    {
      title: "User Centered",
      description: "We'll help you optimize resources, manage cash flow, and make informed decisions to enhance.",
      icon: <RocketOutlined />,
      backgroundImage: A1,
    },
    {
      title: "Scalable",
      description: "We'll help you optimize resources, manage cash flow, and make informed decisions to enhance.",
      icon: <ExpandOutlined />,
      backgroundImage: A2,
    },
    {
      title: "Security First",
      description: "We'll help you optimize resources, manage cash flow, and make informed decisions to enhance.",
      icon: <SafetyOutlined />,
      backgroundImage: A3,
    },
    {
      title: "Innovation",
      description: "We'll help you optimize resources, manage cash flow, and make informed decisions to enhance.",
      icon: <BulbOutlined />,
      backgroundImage: A4,
    },
  ];

  return (
    <div className="about-us-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          We are a forward-thinking company, driven by a passion for innovation and a commitment to delivering
          exceptional value to our clients.
        </p>
      </header>

      <section className="usp-carousel">
        <Carousel autoplay>
          {uspData.map((usp, index) => (
            <div className="usp-item" key={index}>
              <img src={usp.backgroundImage} alt={usp.title} className="usp-background-image" />
              <div className="usp-overlay">
                <div className="usp-content">
                  <div className="usp-icon">{usp.icon}</div>
                  <h2>{usp.title}</h2>
                  <p>{usp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="about-graphic-section">
        <div className="graphic">
          <img
            src={A1}
            alt="Company Vision"
            className="animated-image"
          />
        </div>
        <div className="graphic-text">
          <h2>Our Mission</h2>
          <p>
            To empower businesses with cutting-edge technology solutions, ensuring growth, sustainability, and
            security in every step.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
