import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "./cartcontext";
import axios from "axios";
import "./kidsproductdetail.css";
import { WishlistContext } from "./wishlistcontext";

export default function KidsProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart!");
    navigate("/cart");
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;
  if (!product || Object.keys(product).length === 0) return <p>Product not found</p>;

  return (
    <div className="product-details">
      {/* ✅ Escuelajs uses an array for images */}
      <img
        src={product.images?.[0] || "https://via.placeholder.com/200"}
        alt={product.title}
        className="details-img"
      />

      <div className="details-info">
        <h2>{product.title}</h2>

        
        <p className="category">
          Category: {product.category?.name || "Unknown"}
        </p>

        <p className="description">{product.description}</p>
        <p className="price">Price: ₹{product.price}</p>

        <div className="buttons">
          <button className="add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button
            className="add-wish"
            onClick={() => addToWishlist(product)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
