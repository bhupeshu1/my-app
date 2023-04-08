// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from '../src/Pages/Home/home'
import About from '../src/Pages/About/about'
import Contact from '../src/Pages/Contact/contact'
import Login from '../src/Pages/Login/login'
import Policy from './Pages/Policy/policy';
import Dashboard from './Pages/Dashboard/dashboard';
import Services from './Pages/Services/services';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/about'  element={<About/>} />
    <Route path='/contact'  element={<Contact/>} /> 
    <Route path='/login'  element={<Login/>} />
    <Route path='/policy'  element={<Policy/>} />
    <Route path='/dashboard'  element={<Dashboard/>} />
    <Route path='/services'  element={<Services/>} />
    </Routes>
    
    </BrowserRouter>
  
   </div>
  );
}

export default App;
