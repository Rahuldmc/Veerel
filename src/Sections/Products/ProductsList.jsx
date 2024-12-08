import React, { useState } from 'react'
import ContactForm from './ContactForm';
import "./Products.css"

const ProductsList = ({activeCategory,categories}) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleEnquireClick = (category, product) => {
      setSelectedProduct({ category, product });
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  return (
    <>
        {activeCategory && (
        <div className="product-list">
          <h2>{categories.find(cat => cat.id === activeCategory).name} Products</h2>
          <div className="product-cards">
            {categories.find(cat => cat.id === activeCategory).products.map((product, index) => (
              <div key={index} className="product-card" data-aos="fade-up" data-aos-duration="1000">
                <img src={product.img} alt={product.name} className="product-image"/>
                <div className='product-content'>
                <h3>{product.name}</h3>
                <button 
                  className="enquire-button" 
                  onClick={() => handleEnquireClick(categories.find(cat => cat.id === activeCategory).name, product.name)}
                >
                  Enquire
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ContactForm selectedProduct={selectedProduct} closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  )
}

export default ProductsList