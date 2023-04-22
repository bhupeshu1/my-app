import React from 'react'
import './style.css'
import { useNavigate } from 'react-router'
import { Button } from '@mui/material';
// import { Images } from '../../../../Images'


const About = () => {
  const navigate = useNavigate();
  const navTOpage = (url) => {
    navigate(url)
  }
  return (
    <div className='about-container'>
      <div className='header-image'>
        {/* <img src={Images.open_eye}> */}
      </div>
      <br></br>
      <button onClick={() => navTOpage('/login')}>go to login page</button>
      <br></br>
      <button onClick={() => navTOpage('/dashboard')}>go to services page</button>
      <div className='button-div'>
        <Button color="primary">Primary button</Button>
        <Button color="secondary" style={{ width: "200px" }}>Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>

    </div>
  )
}

export default About