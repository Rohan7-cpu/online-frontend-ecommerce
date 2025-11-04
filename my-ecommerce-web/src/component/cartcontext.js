import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};
//increasing and decreasing 
const increaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};


  // Remove product from cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,increaseQuantity,decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
