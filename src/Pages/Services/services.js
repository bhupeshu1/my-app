import React from 'react'
import './style.css'
const listData=[
  {
    "name":"bhupesh upadhyay"
  },
  {
    "name":"bhupesh upadhyay"
  },
  {
    "name":"bhupesh upadhyay"
  },
  {
    "name":"bhupesh upadhyay"
  },
  {
    "name":"bhupesh upadhyay"
  },
  {
    "name":"bhupesh upadhyay"
  }
]

const services = () => {
  console.log(listData)
  let cars="boolero";
  console.log("**************************",cars)
  // const numbers=[1,2,3,4];
  // const newNumbers=numbers.map(function(numbers){
  //   console.log(numbers)
  //   return (<li>{numbers}</li>)
  // });
  return (
    <div>
      <h1>html list</h1>
      {/* <h1>{newNumbers}</h1> */}
      {listData.map((item, index) =>(
        <li key={index}>{item.name}</li>
    ))}
      
    </div>
  )
}

export default services