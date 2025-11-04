import React from "react";
import { createContext,useState } from "react"

export const WishlistContext=createContext();

export const WishlistProvider=({children})=>{
    const[wishlist,setWishlist]=useState([]);

    const addToWishlist=(product)=>{
        if(!wishlist.find((item)=>item.id=product.id)){
            setWishlist([...wishlist,product]);
            alert("Added to wishlist ❤️");

        }else{
            alert("Already in wishlist")
        }
    };
    const removeFromWishlist =(id)=>{
        setWishlist(wishlist.filter((item)=>item.id!==id));
    };
    return(
        <WishlistContext.Provider value={{wishlist,addToWishlist,removeFromWishlist}}>
          {children}
        </WishlistContext.Provider>
    );
};
