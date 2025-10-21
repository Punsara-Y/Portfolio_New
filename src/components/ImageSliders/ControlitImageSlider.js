import { useState } from "react";
import "../ImageSliders/CSS/ImageSlider.css";

import controlit1 from "../ImageSliders/controlitimages/1.png";
import controlit2 from "../ImageSliders/controlitimages/2.png";
import controlit3 from "../ImageSliders/controlitimages/3.png";



const images = [
    controlit1,controlit2,controlit3
 
];

const ControlitImageSlider = () => {
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

export default ControlitImageSlider;
