import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { NavLink} from "react-router-dom";

import './style.css'
const Navbar = () => {
const [color,setColor]=useState(" ")
//  function  myFunction(){
//   if(isActive){
//     color:'green';
//   }
//   else(){
    
//   }
//  } 
  // function myFunction() {
  //   if(isActive){
      
  //   }
    // code here CAN use carName
  // }
  // const [active, isActive] = useState('red');
  return (
    <div className='Navbar'>
     
     <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/policy">Policy</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
  </div>
  )
}

export default Navbar