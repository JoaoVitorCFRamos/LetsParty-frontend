import "./style.css";
//images
import BuffetImgEx from "../../assets/Rectangle58.png";
import BuffetImgEx2 from "../../assets/Rectangle 61.png";
import BuffetImgEx3 from "../../assets/BuffetInfantil.png";
import { useRef } from "react";

export const Carousel = () => {
  const carousel = useRef(document.createElement("div"));

  const handleLeftClick = (event: any) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (event: any) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="carousel-container">
      <button
        className="carousel-arrow-left control"
        aria-label="carousel-previous image"
        onClick={handleLeftClick}
      >
        ◀
      </button>
      <button
        className="carousel-arrow-right control"
        aria-label="Next Image"
        onClick={handleRightClick}
      >
        ▶
      </button>
      <div className="carousel-gallery-wrapper" ref={carousel}>
        <div className="carousel-gallery">
          <img
            src={BuffetImgEx}
            alt="buffet"
            className="carousel-item carousel-current-item"
          />
          <img
            src={BuffetImgEx}
            alt="buffet"
            className="carousel-item carousel-current-item"
          />
          <img
            src={BuffetImgEx2}
            alt="buffet"
            className="carousel-item carousel-current-item"
          />
          <img
            src={BuffetImgEx}
            alt="buffet"
            className="carousel-item carousel-current-item"
          />
          <img
            src={BuffetImgEx}
            alt="buffet"
            className="carousel-item carousel-current-item"
          />
          <img
            src={BuffetImgEx3}
            alt="buffet"
            className="carousel-item carousel-current-item"
          />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
