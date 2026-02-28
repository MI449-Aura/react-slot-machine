import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import HowToPlay from './How-To-Play';

function Home() {
    return(
        <div>
            <div class="slot-machine">
                <h1>Casino</h1>
                <ul class="slots">
                    <li><img/></li>
                    <li><img/></li>
                    <li><img/></li>
                </ul>
                <button class="spinbutton">SPIN</button>
            </div>
            <div class="pastspins">
                <h2>Past 5 Spins</h2>
                <section class="spingrid">
                    <ul class="spinrow">
                        <li><img/></li>
                        <li><img/></li>
                        <li><img/></li>
                    </ul>
                    <ul class="spinrow">
                        <li><img/></li>
                        <li><img/></li>
                        <li><img/></li>
                    </ul>
                    <ul class="spinrow">
                        <li><img/></li>
                        <li><img/></li>
                        <li><img/></li>
                    </ul>
                    <ul class="spinrow">
                        <li><img/></li>
                        <li><img/></li>
                        <li><img/></li>
                    </ul>
                    <ul class="spinrow">
                        <li><img/></li>
                        <li><img/></li>
                        <li><img/></li>
                    </ul>
                </section>
            </div>
            <button class="backtotopbutton">^</button>
        </div>
    )
}

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
            <Route path="/" element={Home()} />
            <Route path="/How-To-Play" element={HowToPlay()} />
            <Route path="/Professors" element={<h1>Professors</h1>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App
