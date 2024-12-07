import React, { useState } from 'react';

const ContactForm = ({ selectedProduct, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call or send email)
    alert('Enquiry submitted!');
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Enquire about {selectedProduct.product}</h2>
      <p>Category: {selectedProduct.category}</p>
      
      <label>Name</label>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      
      <label>Email</label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      
      <label>Phone</label>
      <input 
        type="tel" 
        name="phone" 
        value={formData.phone} 
        onChange={handleChange} 
        required 
      />
      
      <label>Enquiry</label>
      <textarea 
        name="message" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      />
      
      <button type="submit">Submit Enquiry</button>
      <button type="button" className="close-modal" onClick={closeModal}>Close</button>
    </form>
  );
};

export default ContactForm;
