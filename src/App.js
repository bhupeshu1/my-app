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
import Error404Page from './Pages/Error404Page';
import LoginPage from './Components/Elements/auth/LoginPage/login';

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
    <Route path='/*'  element={<Error404Page/>} />
    <Route path='/loginPage'  element={<LoginPage/>} />
    </Routes>
    
    </BrowserRouter>
  
   </div>
  );
}

export default App;
