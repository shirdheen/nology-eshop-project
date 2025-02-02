import classes from "./Carousel.module.scss";
import { useState, useRef } from "react";
import { Link } from "react-router";

const Carousel = ({ desserts }) => {
  // console.log(desserts);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < desserts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={classes.carouselContainer}>
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={classes.carouselButtonPrev}
      >
        &#10094;
      </button>
      <div className={classes.carouselTrackWrapper}>
        <div
          className={classes.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {desserts.map((dessert) => (
            <div key={dessert.id} className={classes.carouselItem}>
              <img
                src={dessert.imageUrl}
                alt={dessert.name}
                className={classes.carouselImage}
              />
              <h3 className={classes.carouselTitle}>
                <Link
                  to={`/desserts/${dessert.id}`}
                  className={classes.dessertLink}
                >
                  {dessert.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex === desserts.length - 1}
        className={classes.carouselButtonNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
