import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import RegisterSeries from './pages/RegisterSeries';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<RegisterSeries />} />
        <Route path="sobre" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;