import { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/homePage/home';
import './App.css';

const App = () => {
  return(
    <div>
      <Home/>
    </div>
  )
}

export default App;
