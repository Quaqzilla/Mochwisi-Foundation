import { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/homePage/home';
import './App.css';

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>;
    </Routes>
  </BrowserRouter>
  )
}

export default App;
