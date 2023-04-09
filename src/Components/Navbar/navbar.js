import React from 'react'
import { NavLink } from "react-router-dom";
import './style.css'
const navbarData = [
  {  "id":0,"path": '/', "label": "Home" },
  {  "id":1,"path": '/about', "label": "About" },
  {   "id":2,"path": '/contact', "label": "Contact" },
  {   "id":3,"path": '/dashboard', "label": "Dashboard" },
  {  "id":4,"path": '/services', "label": "Services" },
  {  "id":5,"path": '/login', "label": "Login" },
  { "id":6, "path": '/policy', "label": "Policy" },
]
const Navbar = () => {
  return (
    <div className='Navbar'>

      <ul>
        {navbarData.map((item, index) => (
          <li>
            <NavLink  key='index' to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar