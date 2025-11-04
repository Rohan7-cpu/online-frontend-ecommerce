import React from "react";
import { useState,useEffect } from "react";
import"./womenproduct.css"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Womenproduct(){
    const[products ,setProducts] =useState([]);
    const[error,setError]=useState(null)

    useEffect(()=>{
       const womenproducts=async()=>{
        try{
        const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
        setProducts(response.data);
        } catch(error){
            setError("Error in loading");
        } 
       }
       womenproducts();
      
    },[])
     if(error)return<p>{error}</p>
       if(!products.length)return<p>loading...</p>

    return(
        <div className="product-container">
          {products.map((product)=>(
            <div key={product.id}  className="product-card">
              <img 
              src={product.image || `https://picsum.photos/200?random=${product.id}`}
            className="product-img"
            alt={product.title}
            />
            <h3 className="prod-title">{product.title}</h3>
            <p className="prod-desc">{product.description}</p>
            <p className="prod-price">Rs{product.price}</p>
            <Link to={`/women-product/${product.id}`}>view details</Link>
                </div>
          ))
          }
        </div>
    )

};