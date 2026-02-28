import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import HowToPlay from './How-To-Play';



function App() {

  return (
    <BrowserRouter>
      <nav className="top-nav">
        <ul className="logo-button">
            <img src="" alt="" title=""/>
            <p>MSU Media & Info Slot Machine</p>
        </ul>
        <ul className="nav-button">
            <li><Link to="/How-To-Play" title="How To Play">How To Play</Link></li>
            <li><Link to="/Professors" title="Professors">Professors</Link></li>
        </ul>
    </nav>
    <div className="slot-machine">
        <Routes>
            <Route path="/" element={<h1>Casino</h1>} />
            <Route path="/How-To-Play" element={HowToPlay()} />
            <Route path="/Professors" element={Professors()} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App
