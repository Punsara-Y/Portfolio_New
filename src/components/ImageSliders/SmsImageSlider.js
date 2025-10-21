
import { useState } from "react";
import "../ImageSliders/CSS/ImageSlider.css";

import sms1 from "../ImageSliders/smsimages/1.png";
import sms2 from "../ImageSliders/smsimages/2.png";
import sms3 from "../ImageSliders/smsimages/3.png";
import sms4 from "../ImageSliders/smsimages/4.png";
import sms5 from "../ImageSliders/smsimages/5.png";
import sms6 from "../ImageSliders/smsimages/6.png";
import sms7 from "../ImageSliders/smsimages/7.png";
import sms8 from "../ImageSliders/smsimages/8.png";


const images = [
    sms1,sms2,sms3,sms4,sms5,sms6,sms7,sms8
 
];

const SmsImageSlider = () => {
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

export default SmsImageSlider;
