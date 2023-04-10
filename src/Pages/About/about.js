import React from 'react'
import './style.css'
import { useNavigate } from 'react-router'

const About = () => {
  const navigate =useNavigate();
  const navTOpage=(url)=>{
    navigate(url)
  }
  return (
    <div>about
      <br></br>
      <button onClick={()=>navTOpage('/login')}>go to login page</button>
      <br></br>
      <button onClick={()=>navTOpage('/dashboard')}>go to services page</button>

    </div>
  )
}

export default About