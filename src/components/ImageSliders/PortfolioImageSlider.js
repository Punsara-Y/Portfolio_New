import { useState } from "react";
import "../ImageSliders/CSS/ImageSlider.css";

import portfolio1 from "../ImageSliders/portfolioimages/1.png";
import portfolio2 from "../ImageSliders/portfolioimages/2.png";
import portfolio3 from "../ImageSliders/portfolioimages/3.png";
import portfolio4 from "../ImageSliders/portfolioimages/4.png";
import portfolio5 from "../ImageSliders/portfolioimages/5.png";



const images = [
    portfolio1,portfolio2,portfolio3,portfolio4,portfolio5
 
];

const PortfolioImageSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <div className="slide">
        <img src={images[index]} alt={`slide-${index}`} />
      </div>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioImageSlider;
