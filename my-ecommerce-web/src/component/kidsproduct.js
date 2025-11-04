import React, { useState, useEffect } from "react";
import axios from "axios";
import "./kidsproduct.css";
import { Link } from "react-router-dom";

export default function ElectronicsProduct() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products/?categoryId=2");
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching products");
      }
    };
    fetchElectronics();
  }, []);

  if (error) return <p>{error}</p>;
  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.images?.[0] || `https://picsum.photos/200?random=${product.id}`}
            alt={product.title}
            className="product-img"
          />
          <h3 className="prod-title">{product.title}</h3>
          <p className="prod-desc">{product.description}</p>
          <p className="prod-price">₹{product.price}</p>

          {/* FIX: Access category name safely */}
          <p className="prod-category">
            Category: {product.category?.name || "Unknown"}
          </p>

          <Link to={`/kids-product/${product.id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
}
