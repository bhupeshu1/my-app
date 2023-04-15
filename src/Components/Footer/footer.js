import React from 'react'

const footer = (props) => {
  return (
    <div>
        <h1>{props.heading}</h1>
        <h6>I am form {props.place}</h6>
    </div>
  )
}

export default footer