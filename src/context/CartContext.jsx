import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Local cart from localStorage on first render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, []);

  // Save cart to local storage whenver it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart or update quantity if it exists
  const addToCart = (dessert, variantIndex, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === dessert.id && item.variantIndex === variantIndex
      );

      if (existingItemIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: dessert.id,
            name: dessert.name,
            variant: dessert.variants[variantIndex],
            price: dessert.price[variantIndex],
            imageUrl: dessert.imageUrl,
            quantity,
            variantIndex,
          },
        ];
      }
    });
  };

  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
  };

  const updateCartQuantity = (itemIndex, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item, index) =>
        index === itemIndex ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
