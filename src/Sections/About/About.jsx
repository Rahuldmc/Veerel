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
      title: "Innovation",
      description: "Our quick-to-market executions, paired with a variety of customizable packages, make us true partners in every endeavor. We take pride in our accountability and commitment to action, ensuring we consistently deliver the best results together!",
      icon: <RocketOutlined />,
      backgroundImage: A1,
    },
    {
      title: "Specialization",
      description: "Our specialty focuses on large turnkey projects for public sectors, government initiatives, places of worship, corporate environments, prestigious monuments and landscapes, television studios, and more.",
      icon: <ExpandOutlined />,
      backgroundImage: A2,
    },
    {
      title: "Unparallel service",
      description: "We offer bespoke services meticulously tailored to meet your unique requirements, rather than relying on one-size-fits-all templates. We recognize the distinctive needs of you and your organization, enabling you to stand out with authenticity and excellence.",
      icon: <SafetyOutlined />,
      backgroundImage: A3,
    },
    {
      title: "Solution provider",
      description: "We specialize in advanced software development, including AR, VR, XR, and AI solutions. Our offerings also feature customized simulation solutions, such as driving and small arms weapons simulators, tailored for diverse applications.",
      icon: <BulbOutlined />,
      backgroundImage: A4,
    },
  ];

  return (
    <div className="about-us-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
        At <strong>Veerel Enterprises</strong>, we are pioneers in delivering innovative solutions that redefine possibilities across industries. Our passion for technology and commitment to excellence empower us to create transformative experiences that not only meet the needs of our clients but also exceed expectations.
        <br></br> <br></br>
        With a foundation built on innovation, specialization, and unparalleled service, we have expanded our expertise to encompass a diverse portfolio of solutions, ranging from advanced software development, immersive technology, simulation systems, to automation solutions and consultancy services. Whether you are looking for cutting-edge software, bespoke simulators, or integrated automation, we have the expertise to bring your vision to life.
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
          <h2>Mission and Vision</h2>
          <p>
            To lead innovation across industries by delivering customized, cutting-edge solutions that empower organizations to thrive in an increasingly dynamic world. Through a blend of advanced technology, expert knowledge, and creative execution, we aim to provide transformative experiences that drive efficiency, engagement, and progress. We are committed to building lasting partnerships by offering tailored services and solutions that meet the unique needs of every client, ensuring success, sustainability, and a positive impact on their goals.
          </p>
          <br></br>
          <p>
            To lead innovation across industries by delivering customized, cutting-edge solutions that empower organizations to thrive in an increasingly dynamic world. Through a blend of advanced technology, expert knowledge, and creative execution, we aim to provide transformative experiences that drive efficiency, engagement, and progress. We are committed to building lasting partnerships by offering tailored services and solutions that meet the unique needs of every client, ensuring success, sustainability, and a positive impact on their goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
