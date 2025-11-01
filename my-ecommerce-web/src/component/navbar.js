import React, { useContext } from "react";
import { Link } from "react-router-dom";
import images from "../assets/images.jpg";
import { CartContext } from "./cartcontext";
import "./navbar.css";

export default function Navbar() {
  const { cart } = useContext(CartContext); // ✅ destructure cart from context

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={images} alt="Shopease logo" className="Shopease-image" />
        </Link>
        <span>Shopease</span>
      </div>
      
      <ul className="navbar-buttons">
        <li><Link to ="/wishlist">Your Wishlist</Link></li>
        <li className="cart-design" style={{ position: "relative" }}>
          <Link to="/cart">Your Cart</Link>
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
              }}
            >
              {cart.length}
            </span>
          )}
        </li>

        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>

        <li className="dropdown">
          <span className="dropbtn">Our Products</span>
          <div className="dropdown-content">
            <Link to="/mens">Mens</Link>
            <Link to="/womens">Women</Link>
            <Link to="/kids">Kids</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
