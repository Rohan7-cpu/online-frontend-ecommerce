import React, { useState, useEffect } from "react";
import axios from "axios";
import "./wishlist.css";

export default function Wishlistpage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        setError("Error in fetching");
      }
    };
    fetchProducts();
  }, []);

  // Add to wishlist
  const addToWishlist = (item) => {
    if (!wishlist.find((w) => w.id === item.id)) {
      setWishlist([...wishlist, item]);
    } else {
      alert("Already in wishlist");
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="wishlist-container">
      <h1>🛍 Product List</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="product-list">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <p className="product-title">{p.title.slice(0, 20)}...</p>
            <button onClick={() => addToWishlist(p)}>❤️ Add</button>
          </div>
        ))}
      </div>

      <h2>❤️ My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <p className="product-title">{item.title.slice(0, 20)}...</p>
              <button onClick={() => removeFromWishlist(item.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
