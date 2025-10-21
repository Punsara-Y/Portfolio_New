import { useState } from "react";
import "../ImageSliders/CSS/ImageSlider.css";

import lps1 from "../ImageSliders/lptimages/1.png";
import lps2 from "../ImageSliders/lptimages/2.png";
import lps3 from "../ImageSliders/lptimages/3.png";
import lps4 from "../ImageSliders/lptimages/4.png";
import lps5 from "../ImageSliders/lptimages/5.jpg";



const images = [
    lps1,lps2,lps3,lps4,lps5
 
];

const LpsImageSlider = () => {
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

export default LpsImageSlider;
