// import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    console.warn(setSearchParams.get('age'))
    console.warn(setSearchParams.get('city'))
    const age=searchParams.get('age')
    const city=searchParams.get('city')
  return (
    <div>
        <h1>Filter Age</h1>
        <h3>city is {city}</h3>
        <h3>my Age is {age}</h3>
        <button onClick={()=>setSearchParams({age:40})}>set age in query params</button>
    </div>
  )
}

export default Filter