import React, { useState } from 'react';

const CustomCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            transform: `translateX(${100 * (index - currentIndex)}%)`,
            transition: 'transform 0.5s ease-in-out',
            width: '100%',
            display: 'inline-block',
          }}
        >
          {item}
        </div>
      ))}
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default CustomCarousel;
