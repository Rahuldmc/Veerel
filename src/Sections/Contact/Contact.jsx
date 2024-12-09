import React, { useState } from 'react';
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        {/* Map and Contact Info Section */}
        <div className="left-section">
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/d/u/0/embed?mid=17AFQqrTk6l_xQ6u9F1HCWN8mwjf0nms&ehbc=2E312F&noprof=1"
              width="100%"
              height="480"
            ></iframe>
          </div>

          <div className="contact-info">
            <p className="info-title">Contact Information</p>
            <p>Email: <a href='mailto:support@veerelenterprises.com' style={{color:'white', textDecoration:'none'}}>support@veerelenterprises.com</a></p>
            <p>Phone: <a href='tel:+919686940950' style={{color:'white', textDecoration:'none'}}>+91 96869 40950</a></p>
            <p>Branches: <a href='https://maps.app.goo.gl/NFeLNvg7uEPsBmg58' style={{color:'white', textDecoration:'none'}}>Bangalore</a>, <a href='https://maps.app.goo.gl/ZTykYjk9x7Zr8Ej77' style={{color:'white', textDecoration:'none'}}>Chennai</a></p>
          </div>
        </div>

        {/* Enquiry Form Section */}
        <div className="right-section">
          <div className="message-container">
            <p className="contact-title">Get In Touch With Us</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="enquiry">Enquiry:</label>
              <textarea
                id="enquiry"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
