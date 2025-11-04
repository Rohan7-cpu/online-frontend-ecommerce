import React, { useState, useEffect } from "react";
import "./menproduct.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Menproduct() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mensproduct = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setProducts(response.data);
      } catch (error) {
        setError("Error in getting products");
      }
    };
    mensproduct();
  }, []);

  if (error) return <p>{error}</p>;
  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image || `https://picsum.photos/200?random=${product.id}`}
            className="product-img"
            alt={product.title}
          />
          <h3 className="prod-title">{product.title}</h3>
          <p className="prod-desc">{product.description}</p>
          <p className="prod-price">RS {product.price}</p>
          <Link to={`/men-product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
