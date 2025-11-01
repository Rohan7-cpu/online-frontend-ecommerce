import React from "react";
import { useState } from "react";
import "./signup.css"

export default function Signup(){
const[firstname,setFirstName]=useState("");
const[lastname,setLastName]=useState("");
const[email,setEmail]=useState("");
const[phoneno,setPhoneno]=useState("");
const[password,setPassword]=useState("");

const handlesubmit=(e)=>{
 e.preventDefault();
 if(!firstname.trim()){
  alert("first name cannot be empty")
 }
 else if(!lastname.trim()){
  alert("last name cannot be empty")
 }
 else if(!email.trim()){
  alert("email cannot be empty")
 }
 else if(!phoneno.trim()){
  alert("phoneno cannot be empty")
 }
 else if(!password.trim()||password.length<10){
  alert("password cannot be empty or cannot be less than 10")
 }
else{

    alert("Form submitted:");
  }
  };

return(
    <div className="container">
        <h2>SIGNUP </h2>
       <form onSubmit={handlesubmit}>
    <label htmlFor="firstname">Firstname</label>
    <input type ="text"
     placeholder="Enter your first name"
     value={firstname}
     onChange={(e)=>setFirstName(e.target.value)}
/>
    <label htmlFor="lastname">lastname</label>
    <input type ="text"
     placeholder="Enter your last name"
     value={lastname}
     onChange={(e)=>setLastName(e.target.value)}
     />
      <label htmlFor="email">Email</label>
    <input type ="email"
     placeholder="Enter your email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     /> 
     <label htmlFor="phone number">phonenumber</label>
    <input type ="number"
     placeholder="Enter your phone number"
     value={phoneno}
     onChange={(e)=>setPhoneno(e.target.value)}
     />
     <label htmlFor="password">Password</label>
    <input type ="password"
     placeholder="Enter your password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     />
     <button type="submit" onClick={handlesubmit}>Submit</button>
     </form>
    </div>
);
}
