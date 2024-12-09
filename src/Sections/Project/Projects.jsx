import React, { useState } from "react";
import { Carousel, Modal } from "antd";
import "./Projects.css";
import bgvideo from "../../Assets/moon_-_116594 (Original).mp4";
import A1 from "../../Assets/A1.jpg"
import A2 from "../../Assets/A2.jpg"
import A3 from "../../Assets/A3.jpg"
import A4 from "../../Assets/A4.jpg"


// Example project data
const projects = [
    {
      title: "Driving Simulator",
      client: "Indian Army",
      description:
        "We developed a VR-based driving simulator for the Indian Army, offering a highly immersive training experience that replicates real-world driving conditions. By leveraging advanced VR technology, this solution enhances driving skills in a safe, controlled environment. Our innovative approach empowers military personnel with tailored, risk-free training, ensuring operational readiness and excellence in line with our mission to drive progress through cutting-edge solutions.",
      images: [
        A1,A2,A3,A4
    ],
    },
    {
      title: "Static Website",
      client: "Lux and Decibels",
      description:
        "Delivering unparalleled excellence and innovation. This project redefined the standards of the industry with cutting-edge designs.",
      images: [
        A1,A2,A3,A4
      ],
    },
    {
        title: "Billing Software",
        client: "Ayushri Silks",
        description:
          "Delivering unparalleled excellence and innovation. This project redefined the standards of the industry with cutting-edge designs.",
        images: [
          A1,A2,A3,A4
        ],
      },
      {
        title: "Ticketing and Access Management",
        client: "Lux and Decibels",
        description:
          "Delivering unparalleled excellence and innovation. This project redefined the standards of the industry with cutting-edge designs.",
        images: [
          A1,A2,A3,A4
        ],
      },
      {
        title: "Patna Sahib Gurudwara",
        client: "Client B",
        description:
          "Delivering unparalleled excellence and innovation. This project redefined the standards of the industry with cutting-edge designs.",
        images: [
          A1,A2,A3,A4
        ],
      },
      {
        title: "Madurai Railway Station",
        client: "Indian Railways",
        description:
          "Delivering unparalleled excellence and innovation. This project redefined the standards of the industry with cutting-edge designs.",
        images: [
          A1,A2,A3,A4
        ],
      },
      {
        title: "Golconda Fort",
        client: "APTDC",
        description:
          "Delivering unparalleled excellence and innovation. This project redefined the standards of the industry with cutting-edge designs.",
        images: [
          A1,A2,A3,A4
        ],
      },
      {
        title: "Coochebehar Palace",
        client: "WBTDC",
        description:
          "Delivering unparalleled excellence and innovation. This project redefined the standards of the industry with cutting-edge designs.",
        images: [
          A1,A2,A3,A4
        ],
      },
      
    // Add more projects as needed
  ];
const Projects = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
  
    const showModal = (project) => {
      setActiveProject(project);
      setIsModalVisible(true);
    };
  
    const handleClose = () => {
      setIsModalVisible(false);
      setActiveProject(null);
    };
  
    return (
      <div className="project-gallery">
        {/* Background Video */}
        <video className="bgvid-parallax" src={bgvideo} autoPlay loop muted></video>
  
        {/* Header */}
        <header className="project-gallery-header">
          <h1>Our Standout Projects</h1>
          <p>
            Explore our collection of innovative projects, where creativity meets
            technology to deliver outstanding results.
          </p>
        </header>
  
        {/* Projects Section */}
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* Project Image Carousel */}
              <Carousel autoplay className="project-carousel">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="project-carousel-slide">
                    <img src={image} alt={`Project ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
  
              {/* Project Details */}
              <div className="project-details">
                <h2>{project.title}</h2>
                <p>{project.description.substring(0, 100)}...</p>
                <button
                  className="view-more-button"
                  onClick={() => showModal(project)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Modal for Project Details */}
        <Modal
          title={activeProject?.title}
          open={isModalVisible}
          onCancel={handleClose}
          footer={null}
          className="project-modal"
        >
          {activeProject && (
            <div className="modal-content">
              <h3>Client: {activeProject.client}</h3>
              <p>{activeProject.description}</p>
              <Carousel autoplay>
                {activeProject.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={image}
                      alt={`Project ${activeProject.title}`}
                      className="modal-carousel-image"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </Modal>
      </div>
    );
  };
  
  export default Projects;
  