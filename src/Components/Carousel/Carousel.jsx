import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ item }) => {
  const [slide, setSlide] = useState(0);
  const data = item.slides;

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <div className="arrow arrow-left" onClick={prevSlide}>
        <img src="/images/leftArrowVariant1Icon.svg" alt="왼쪽화살표" />
      </div>
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide-hidden"}
          />
        );
      })}
      <div className="arrow arrow-right" onClick={nextSlide}>
        <img src="/images/rightArrowVariant1Icon.svg" alt="오른쪽쪽화살표" />
      </div>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
