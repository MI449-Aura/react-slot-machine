import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'



function App() {

  return (
    <>
      <nav class="top-nav">
        <ul class="logo-button">
            <img src="" alt="" title=""/>
            <p>MSU Media & Info Slot Machine</p>
        </ul>
        <ul class="nav-button">
            <li><a href="/how-to-play.html" title="how-to-play">How to Play</a></li>
            <li><a href="/professors.html" title="Professors">Professors</a></li>
        </ul>
    </nav>
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
    <buttone class="backtotopbutton">^</buttone>
    </>
  )
}

export default App
