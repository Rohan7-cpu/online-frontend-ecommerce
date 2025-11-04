import React, { useContext } from "react";
import { CartContext } from "./cartcontext";
import "./cart.css";

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  if (cart.length === 0)
    return <h3>Your cart is empty</h3>;

  const proceedToBuy = () => {
    alert("Successfully proceed to buy");
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img
            src={product.image || `https://picsum.photos/200?random=${product.id}`}
            alt={product.title}
            className="cart-img"
          />
          <div className="cart-info">
            <h4>{product.title}</h4>
            <p>₹{product.price}</p>

            <div className="quantity-control">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>

            <p>Total: ₹{(product.price * product.quantity).toFixed(2)}</p>

            <button onClick={() => removeFromCart(product.id)} className="btn-remove">
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Grand Total: ₹{totalAmount.toFixed(2)}</h3>
        <button onClick={proceedToBuy} className="btn-buy">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}
