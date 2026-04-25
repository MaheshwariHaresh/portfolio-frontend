import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "../styles/ImageSlider.css";
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // AUTO SLIDE
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     goToNext();
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, [currentIndex]);

  return (
    <div className="slider-container">
      {/* Arrows */}
      <button className="slider-arrow left" onClick={goToPrevious}>
        <KeyboardArrowLeftIcon />
      </button>
      <button className="slider-arrow right" onClick={goToNext}>
        <KeyboardArrowRightIcon />
      </button>

      {/* SLIDING WRAPPER */}
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt="" className="slide-img" />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
