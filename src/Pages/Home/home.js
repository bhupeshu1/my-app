import React from 'react'
import './style.css';
import {useLocation} from 'react-router-dom';
import Image, { Images } from '../../Images/index'
const Home = (props) => {
  // const navigate =useNavigate();
  // const [status,setStatus]=React.useState(false);
  const location = useLocation();
  console.log(location)
  return (
    <div className='home-container'>
      <div className="sidebar">
        

      </div>
      <div className="middle-container">
      <div className='card'>
        <img src={Images.computer} alt="icon" width="200px"
         height="150px"></img>
          <img src={Images.computer} alt="icon" width="200px"
         height="150px"></img>
          <img src={Images.computer} alt="icon" width="200px"
         height="150px"></img>
          <img src={Images.computer} alt="icon" width="200px"
         height="150px"></img>
          <img src={Images.computer} alt="icon" width="200px"
         height="150px"></img>
          <img src={Images.computer} alt="icon" width="200px"
         height="150px"></img>
          <img src={Images.computer} alt="icon" width="200px"
         height="150px"></img>
      </div>

</div>
      {/* {
      status ? <h1>	If the user clicks "OK", the input value is returned.
      Otherwise null is returned.</h1> : false
      }
      <button onClick={()=>setStatus(false)}>Toggle</button>
      <Footer heading="good morning" place="Almora Uttarakhand"/> */}

      
{/*       
        <button onClick={()=>setStatus(true)}>Button click and read the sentence</button>
        <button onClick={()=>setStatus(false)}>Hide the content</button> */}

    </div>
  )
}

export default Home