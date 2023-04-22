import React from 'react'
import './style.css';
import { useFormik } from 'formik';
import { values } from 'lodash';


const Contact = () => {
  const initialValues ={
    name:"",
    email:"",
    password:"",
    confirm_password:""
  };
  const {values,errors, handleSubmit,handleChange,handleBlur} =  useFormik({
    initialValues:initialValues,
    onSubmit: (values) =>{
// console.log("******************************************",values);
    },
    
  });
  // console.log(Formik);
  return (
    <div className='form-container'>
       <div className='input block'>
        <div>Name</div>
        <input type='text' name='name' id="name" placeholder='enter your name' value={values.name}></input>
      </div>
      <div className='input block'>
        <div>Email</div>
        <input type='text' name='email' id="email" placeholder='enter your email'></input>
      </div>
      <div className='input block'>
        <div>Password</div>
        <input type='password' name='password' id="password" placeholder='enter your password'></input>
      </div>
      <div className='input block'>
        <div>confirm password</div>
        <input type='password' name='confirm_password' id="confirm_password" placeholder='enter your confirm password'></input>
      </div>
      <div className='button-div'>
        <button type='submit'>submit</button>
      </div>
    </div>
  )
}

export default Contact