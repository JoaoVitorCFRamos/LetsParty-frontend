import "./style.css";
import { useRef } from "react";
import { IBuffetImage } from "../../pages/Customers/BuffetProfile";

type Props = {
  images: IBuffetImage[];
};

export const Carousel = ({ images }: Props) => {
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
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt="buffet"
              className="carousel-item carousel-current-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
