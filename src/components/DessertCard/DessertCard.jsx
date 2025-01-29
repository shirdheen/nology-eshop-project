import { useEffect, useState } from "react";
import classes from "./DessertCard.module.scss";
import { formatPrice } from "../../utils/formatPrice";

const DessertCard = ({ dessert, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), delay);
  }, [delay]);

  return (
    <div
      key={dessert.id}
      className={`${classes.dessertCard} ${isLoaded ? classes.loaded : ""}`}
    >
      <img
        src={dessert.imageUrl}
        alt={dessert.name}
        className={classes.dessertImage}
      />
      <div className={classes.dessertInfo}>
        <h3 className={classes.dessertTitle}>{dessert.name}</h3>
        <p className={classes.dessertPrice}>{formatPrice(dessert.price)}</p>
        <button className={classes.buyNowButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default DessertCard;
