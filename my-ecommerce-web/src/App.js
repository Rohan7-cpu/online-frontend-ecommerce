import React from "react";
import Navbar from "./component/navbar";
import HomePage from "./component/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./component/signup";
import Login from "./component/login";
import Productdetails from "./component/productdetails";
import Menproduct from "./component/menproduct";
import Womenproduct from "./component/womenproduct";
import Kidsproduct from "./component/kidsproduct";
import Cart from "./component/cart";
import CartProvider from "./component/cartcontext";

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<Productdetails/>}/>
        <Route path="/mens" element={<Menproduct/>}/>
        <Route path="/womens" element={<Womenproduct />} />
        <Route path="/kids" element={<Kidsproduct />} />
        <Route path="/cart" element={<Cart/>} />
    
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
