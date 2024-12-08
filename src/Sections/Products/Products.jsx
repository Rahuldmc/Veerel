import React, { useState } from 'react';
import './Products.css';  // Assuming we are using an external CSS file for styling
import ContactForm from './ContactForm'; // Import the ContactForm component
import A1 from "../../Assets/A1.jpg";
import A2 from "../../Assets/A2.jpg";
import A3 from "../../Assets/A3.jpg";
import A4 from "../../Assets/A4.jpg";
import ProductsList from './ProductsList';

const categories = [
  { id: 1, name: "Simulators", products: [
      { name: "Driving Simulator", img: A1 },
      { name: "Drone Simulator", img: A2 },
      { name: "Flight Simulator", img: A3 },
      { name: "Aircraft Rescue & Fire Fighting Simulator", img: A4 },
      { name: "Fire Fighting Simulator", img: A1 },
      { name: "Ship Simulator", img: A2 },
      { name: "Small arms and weapons Simulator", img: A3 }
    ],
    img: A4 // Add category image here
  },
  { id: 2, name: "Software Solutions", products: [
      { name: "Bespoke Customized Software", img: A2 },
      { name: "Mobile Application", img: A3 },
      { name: "CRM", img: A4 },
      { name: "ERP", img: A1 },
      { name: "Website", img: A2 },
      { name: "Chatbots", img: A3 }
    ],
    img: A4 // Add category image here
  },
  { id: 3, name: "Automation Solutions", products: [
      { name: "RFID Solution", img: A1 },
      { name: "Ticketing System", img: A2 },
      { name: "Access Control Systems", img: A3 },
      { name: "Library management Systems", img: A4 },
      { name: "Inventory management Systems", img: A1 }
    ],
    img: A2 // Add category image here
  },
  { id: 4, name: "Son et Lumière", products: [
      { name: "Laser shows", img: A3 },
      { name: "Light and sound", img: A4 },
      { name: "Water fountains shows", img: A1 },
      { name: "Project mapping shows", img: A2 },
      { name: "Mid-air projections shows", img: A3 }
    ],
    img: A4 // Add category image here
  },
  { id: 5, name: "Other Services", products: [
      { name: "PPP mode service", img: A1 },
      { name: "Tourism development service", img: A2 },
      { name: "Branding and Design", img: A3 },
      { name: "Consultancy", img: A4 }
    ],
    img: A1 // Add category image here
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(null);
 

  return (
    <div className="products-container">
      <h1 className="section-title">Our Products & Services</h1>
      
      <div className="category-cards">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="category-card" 
            onClick={() => setActiveCategory(category.id)}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={category.img} alt={category.name} className="category-image"/>
            <h2>{category.name}</h2>
            <button className="enquire-button" onClick={() => setActiveCategory(category.id)}>View Products</button>
          </div>
        ))}
      </div>
      {
      activeCategory && 
      <ProductsList activeCategory={activeCategory} categories={categories}/>
      }
    </div>
  );
};

export default Products;
