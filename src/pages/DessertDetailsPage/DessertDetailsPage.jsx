import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../context/CartContext";
import {
  fetchDessertById,
  updateQuantity,
} from "../../services/firebase-functions";
import classes from "./DessertDetailsPage.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const DessertDetailsPage = () => {
  const { id } = useParams();
  const { cart, addToCart } = useContext(CartContext);
  const [dessert, setDessert] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getDessert = async () => {
      setIsLoading(true);
      const fetchedDessert = await fetchDessertById(id);
      setDessert(fetchedDessert);
      setIsLoading(false);
      setIsLoaded(true);
    };

    getDessert();
  }, [id]);

  useEffect(() => {
    const matchStock = async () => {
      const updatedDessert = await fetchDessertById(id);
      setDessert(updatedDessert);
    };

    matchStock();
  }, [cart]);

  const handleVariantChange = (event) => {
    setSelectedVariantIndex(parseInt(event.target.value, 10));
    setQuantity(1);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value > 0 && value <= dessert.quantity[selectedVariantIndex]) {
      setQuantity(value);
    }
  };

  const handleAddToCart = async () => {
    if (dessert.quantity[selectedVariantIndex] >= quantity) {
      const success = await updateQuantity(
        dessert.id,
        selectedVariantIndex,
        quantity
      );
      if (success) {
        addToCart(dessert, selectedVariantIndex, quantity);

        setDessert((prev) => ({
          ...prev,
          quantity: prev.quantity.map((q, index) =>
            index === selectedVariantIndex ? q - quantity : q
          ),
        }));
      }
    }
  };

  if (isLoading || !dessert) {
    return <LoadingSpinner />; // ADD LOADING SPINNER
  }

  const remainingQuantity = dessert.quantity[selectedVariantIndex];

  return (
    <>
      <NavBar />
      <div
        className={`${classes.dessertDetailsPage} ${
          isLoaded ? classes.loaded : ""
        }`}
      >
        <div className={classes.imageContainer}>
          <img src={dessert.imageUrl} alt={dessert.name} />
        </div>

        <div className={classes.detailsContainer}>
          <h1 className={classes.dessertTitle}>{dessert.name}</h1>
          <p className={classes.dessertDescription}>{dessert.description}</p>

          <label className={classes.label}>Choose a size/flavour:</label>
          <select
            className={classes.variantSelector}
            onChange={handleVariantChange}
          >
            {dessert.variants.map((variant, index) => (
              <option key={index} value={index}>
                {variant} - ${dessert.price[index].toFixed(2)}
              </option>
            ))}
          </select>

          <div className={classes.quantityContainer}>
            <label className={classes.label}>Quantity:</label>
            <input
              type="number"
              min="1"
              max={remainingQuantity}
              value={quantity}
              onChange={handleQuantityChange}
            />
            <span className={classes.quantityInfo}>
              {remainingQuantity} left
            </span>
          </div>

          <button
            className={classes.addToCart}
            onClick={handleAddToCart}
            disabled={dessert.quantity[selectedVariantIndex] === 0}
          >
            {dessert.quantity[selectedVariantIndex] > 0
              ? "Add to Cart"
              : "Sorry, the item is out of stock"}
          </button>
        </div>
      </div>
    </>
  );
};

export default DessertDetailsPage;
