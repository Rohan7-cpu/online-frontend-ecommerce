import React, { useContext } from "react";
import { WishlistContext } from "./wishlistcontext";
import "./wishlist.css";

export default function Wishlistpage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title.slice(0, 20)}...</p>
              <button onClick={() => removeFromWishlist(item.id)}>❌ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
