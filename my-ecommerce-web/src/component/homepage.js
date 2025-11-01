import React, { useState, useEffect } from "react";
import "./homepage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate= useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        setProducts(response.data);
      } catch (err) {
        setError("Failed to load products");
      }
    };
    fetchProducts();
  }, []);

  if (error) return <p>{error}</p>;
  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image ||`https://picsum.photos/200?random=${product.id}`}
          className="product-img"
          onClick={()=>navigate(`/product/${product.id}`)}
          style={{cursor:"pointer"}}
          />
          <h3>{product.title}</h3>
          <p className="desc">{product.description}</p>
          <p className="price">RS {product.price}</p>
        </div>
      ))}
    </div>
  );
}

