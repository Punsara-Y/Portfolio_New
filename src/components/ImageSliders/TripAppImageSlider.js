import React, { useState } from "react";
import "../ImageSliders/CSS/ImageSlider.css";

import trip1 from "../ImageSliders/TripappImages/1.png";
import trip2 from "../ImageSliders/TripappImages/2.png";
import trip3 from "../ImageSliders/TripappImages/3.png";
import trip4 from "../ImageSliders/TripappImages/4.png";
import trip5 from "../ImageSliders/TripappImages/5.png";
import trip6 from "../ImageSliders/TripappImages/6.png";
import trip7 from "../ImageSliders/TripappImages/7.png";
import trip8 from "../ImageSliders/TripappImages/8.png";
import trip9 from "../ImageSliders/TripappImages/9.png";
import trip10 from "../ImageSliders/TripappImages/10.png";
import trip11 from "../ImageSliders/TripappImages/11.png";


const images = [
    trip1,trip2,trip3,trip4,trip5,trip6,trip7,trip8,trip9,trip10,trip11
 
];

const TripAppImageSlider = () => {
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

export default TripAppImageSlider;
