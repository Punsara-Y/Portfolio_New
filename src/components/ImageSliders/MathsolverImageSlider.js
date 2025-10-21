import { useState } from "react";
import "../ImageSliders/CSS/ImageSlider.css";

import mathsolver1 from "../ImageSliders/mathsolverimages/1.png";
import mathsolver2 from "../ImageSliders/mathsolverimages/2.png";
import mathsolver3 from "../ImageSliders/mathsolverimages/3.png";
import mathsolver4 from "../ImageSliders/mathsolverimages/4.png";
import mathsolver5 from "../ImageSliders/mathsolverimages/5.png";



const images = [
    mathsolver1,mathsolver2,mathsolver3,mathsolver4,mathsolver5
 
];

const MathsolverImageSlider = () => {
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

export default MathsolverImageSlider;
