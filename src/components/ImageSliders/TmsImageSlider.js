import { useState } from "react";
import "../ImageSliders/CSS/ImageSlider.css";

import tms1 from "../ImageSliders/tmsimages/1.png";
import tms2 from "../ImageSliders/tmsimages/2.png";
import tms3 from "../ImageSliders/tmsimages/3.png";
import tms4 from "../ImageSliders/tmsimages/4.png";
import tms5 from "../ImageSliders/tmsimages/5.png";



const images = [
    tms1,tms2,tms3,tms4,tms5
 
];

const TmsImageSlider = () => {
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

export default TmsImageSlider;
