import { useState } from "react";
import "../ImageSliders/CSS/ImageSlider.css";

import ngg1 from "../ImageSliders/nggimages/1.png";
import ngg2 from "../ImageSliders/nggimages/2.png";
import ngg3 from "../ImageSliders/nggimages/3.png";
import ngg4 from "../ImageSliders/nggimages/4.png";
import ngg5 from "../ImageSliders/nggimages/5.png";
import ngg6 from "../ImageSliders/nggimages/6.png";

const images = [
    ngg1,ngg2,ngg3,ngg4,ngg5,ngg6
];

const NumbergameImageSlider = () => {
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

export default NumbergameImageSlider;

