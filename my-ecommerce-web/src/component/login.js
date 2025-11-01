import React, { useState } from "react";
import "./login.css";
export default function Login (){   
 const[name ,setName]=useState("");
 const[email,setEmail]=useState("");
 const[Password,setPassword]=useState("");

 const handlesubmit=(e)=>{
  e.preventDefault();
  if(name===""){
    alert("name cannot be empty");
  }
else if(email===""){
    alert("email cannot be empty");
    }
    else if(Password===""||Password.length<10){
    alert("Password cannot be empty or length cannot be less than 10");
    }
    else{

   alert("login successful");
 };
}
 return(
    <div className="container">
        <h2>LOGIN</h2>
        <form onSubmit={handlesubmit}>
          <label htmlFor="name">Name</label>
          <input type="name"
           placeholder="Enter your name"
           value={name}
           onChange={(e)=> setName(e.target.value)}
           />
           <label htmlFor="email">Email</label>
           <input type="email"
           placeholder="Enter your email"
           value ={email}
           onChange={(e)=>setEmail(e.target.value)}
           />
           <label htmlFor="password">Password</label>
           <input type="password"
           placeholder="Enter your password"
           value={Password}
           onChange={(e)=>setPassword(e.target.value)}
           />
           <button type="submit">Submit</button>
        </form>
    </div>
 );
}

