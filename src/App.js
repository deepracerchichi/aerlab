import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './components/Home';
import AboutUs from './components/About';
import ForeCast from './components/Forecast';
import NavBar from './components/Nav';
import PracPart from './components/Practice';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/forecast" element={<ForeCast />} />
        <Route path="/practice" element={<PracPart />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
