import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import classes from "./CartPage.module.scss";
import NavBar from "../../components/NavBar/NavBar";

const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity, clearCart } =
    useContext(CartContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  });

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <NavBar />
      <div className={`${classes.cartPage} ${isLoaded ? classes.loaded : ""}`}>
        <h1 className={classes.heading}>Your Cart</h1>
        {cart.length === 0 ? (
          <div
            className={`${classes.emptyCart} ${isLoaded ? classes.loaded : ""}`}
          >
            <p>You cart is empty.</p>
            <Link to="/desserts" className={classes.continueShopping}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div className={classes.cartItem} key={index}>
                <img src={item.imageUrl} alt={item.name} />
                <div>
                  <h2>
                    {item.name} - {item.variant}
                  </h2>
                  <p className={classes.unitPrice}>
                    ${item.price.toFixed(2)} each
                  </p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateCartQuantity(index, parseInt(e.target.value, 10))
                    }
                    className={classes.cartInput}
                  />
                  <button
                    className={classes.removeButton}
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <h3
              className={`${classes.totalPrice} ${
                isLoaded ? classes.loaded : ""
              }`}
            >
              Total: ${getTotalPrice().toFixed(2)}
            </h3>
            <button className={classes.checkoutButton} onClick={clearCart}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
