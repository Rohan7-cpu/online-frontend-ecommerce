import React from "react";
import { useEffect } from "react";
import Navbar from "./component/navbar";
import HomePage from "./component/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./component/signup";
import Login from "./component/login";
import Productdetails from "./component/productdetails";
import MenProductDetails from "./component/menproductdetail";
import WomenProductDetails from "./component/womenproductdetail";
import KidsProductDetails from "./component/kidsproductdetail";
import Menproduct from "./component/menproduct";
import Womenproduct from "./component/womenproduct";
import Kidsproduct from "./component/kidsproduct";
import Cart from "./component/cart";
import CartProvider from "./component/cartcontext";
import Wishlistpage from "./component/wishlist";
import { WishlistProvider } from "./component/wishlistcontext";
import Footer from "./component/footer";

function App() {
   useEffect(() => {
   
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  return (
   
    <WishlistProvider>
    <CartProvider>
    <Router>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<Productdetails/>}/>
        <Route path="/men-product/:id" element={<MenProductDetails/>}/>
        <Route path="/women-product/:id" element={<WomenProductDetails/>}/>
        <Route path="/kids-product/:id" element={<KidsProductDetails/>}/>
        <Route path="/mens" element={<Menproduct/>}/>
        <Route path="/womens" element={<Womenproduct />} />
        <Route path="/kids" element={<Kidsproduct />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlistpage />} />
    
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
    </WishlistProvider>
  );
}

export default App;
