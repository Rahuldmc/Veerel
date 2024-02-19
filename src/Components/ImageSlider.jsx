import React, { useEffect, useState } from 'react';

const ImageCarousel = ({ slides,interval=5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <button className="arrow left" onClick={prevImage}>&#8249;</button>
        {slides.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`carousel-${index}`}
            className={index === currentIndex ? 'visible carousel-img' : 'hidden carousel-img'}
          />
        ))}
        <button className="arrow right" onClick={nextImage}>&#8250;</button>
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => selectImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
