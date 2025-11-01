import React,{useContext} from "react";
import { CartContext } from "./cartcontext";
import"./cart.css"

export default function Cart(){
    const{cart,removeFromCart } =useContext(CartContext);
    if(cart.length===0)
        return <h3>your cart is empty</h3>

    const proceedtobuy=()=>{
        alert("successfully proceed to buy");
    }

    return(
        <div style={{padding:20}}>
            <h2>Your Cart</h2>
            {cart.map((product)=>(
              <div key={product.id}>
               <img 
                src={product.image || `https://picsum.photos/200?random=${product.id}`}
                  alt={product.title}
                  width="100"
                  />
                 <h4>{product.description}</h4> 
                 <p>Rs {product.price}</p>
                 <button onClick={()=>removeFromCart(product.id)} className="btn-remove">Remove</button>
              </div>
            ))}
            <button onClick={proceedtobuy} className="btn-buy">Buy</button>
        </div>
    )
}