import React from "react";
import { useState,useEffect } from "react";
import"./kidsproduct.css";
import axios from "axios";

export default function Kidsproduct(){
  const[products,setProducts]=useState([]);
  const[error,setError]=useState(null)

  useEffect(()=>{
    const kidsproducts=async()=>{
        try{
        const response =await axios.get("https://api.escuelajs.co/api/v1/products");
            setProducts(response.data);
        }catch(error){
            setError("Error in getting products")
        }
    };
  
      kidsproducts();
    },[]);
     
  if(error)return<p>error </p>
  if(!products.length)return<p>loading...</p>

  return(
  <div className="product-container">
    {products.map((product)=>(
        <div id={product.id} className="product-card">
            <img 
            src={product.images?.[0]||`https://picsum.photos/200?random=${product.id}`} 
            alt={product.title} 
            className="product-img"/>
            <p className="prod-title">{product.title}</p>
            <p className="prod-desc">{product.description}</p>
            <p className="prod-price">RS {product.price}</p>
           </div> 
    ))
     }
    </div>
  );
}
  