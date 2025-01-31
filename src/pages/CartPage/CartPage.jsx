import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity, clearCart } =
    useContext(CartContext);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>You cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h2>
                  {item.name}-{item.variant}
                </h2>
                <p>${item.price.toFixed(2)} each</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateCartQuantity(index, parseInt(e.target.value, 10))
                  }
                />
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          <button onClick={clearCart}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
