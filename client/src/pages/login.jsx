import { useState } from "react";
// import "./styling/registration.css"
import {  useNavigate } from "react-router-dom";
export const Registration = () => {
  const navigate=useNavigate();
  const amount=1500;
  const currency="INR";
  const recieptId="Testing1"
  const paymentHandler= async (e)=>{
    const response = await fetch("http://localhost:5000/register",
      {method:"POST",
        body:JSON.stringify({
          amount,
          currency,
          reciept:recieptId,
        }),
        headers:{
          "Content-type":"application/json"
        }
      });
      const order= await response.json();
      console.log(order);
  }
  const [user,setUser]= useState({
    Firstname:"",
    Lastname:"",
    emailId:"",
    password:"",
    phone:"",

  })
  
  const handleInput=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setUser({
      ...user,
      [name]:value,//dynamic variable if prev property not set it creates new
    })
  }
  const handleSubmit=async (e)=>{
    try {
    e.preventDefault();
    // sendDaatatobackend
    console.log("INside", user)
      
      const res=await fetch("http://localhost:5000/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
      })
      // const data = await res.json();
      console.log(JSON.stringify(user),"hey")
      
      if(res.ok){
            window.alert("Registration Succesful")
            console.log(" Succesfully registered")
            setUser({
              Firstname:"",
              Lastname:"",
              emailId:"",
              password:"",
              phone:"",
            })
            navigate("/profile");
            process.exit(1);
      }
    } catch (error) {
      console.log(error);
          window.alert("Invalid Registration")
          console.log("Invalid registered")
    }
  }
  return (<>
    <div className="registration-box">
  
      <form method="POST" onSubmit={handleSubmit}>
      <ul>
        <li>
            <input type="text"  
                name="Firstname" 
                placeholder="Firstname" 
                id="Firstname" 
                required 
                autoComplete="off" 
                value={user.Firstname} 
                onChange={handleInput}/>
            </li>
        <li>
            <input type="text"  
                name="Lastname" 
                placeholder="Lastname" 
                id="Lastname" 
                required 
                autoComplete="off" 
                value={user.Lastname} 
                onChange={handleInput}/>
            </li>
        <li>
            <input type="text"  
                name="emailId" 
                placeholder="emailId" 
                id="emailId" 
                required 
                autoComplete="off" 
                value={user.emailId} 
                onChange={handleInput}/>
            </li>
        <li>
            <input type="text"  
                name="password" 
                placeholder="password" 
                id="password" 
                required 
                autoComplete="off" 
                value={user.password} 
                onChange={handleInput}/>
            </li>
                <li>
            <input type="number"  
                name="phone" 
                placeholder="phone" 
                id="phone" 
                required 
                autoComplete="off" 
                value={user.phone} 
                onChange={handleInput}/>
            </li>
            <li><button onClick={paymentHandler}>Register</button></li>
            
      </ul>

      
      </form>
    </div>
    </>
  )
}

export default Registration;