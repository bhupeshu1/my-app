// import React from 'react'
import './style.css';
import {useLocation,useNavigate } from 'react-router-dom';
const Home = () => {
  // const navigate =useNavigate();
  const location = useLocation();
  console.log(location)
  return (
    <div>
      home
{/* <h1 to onClick={() =>navigate('/about')} style={{cursor:"pointer"}}>go to about page</h1> */}
    </div>
  )
}

export default Home