import React, { useState } from 'react'
import './App.css'

function Home() {

    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [showProfessors, setShowProfessors] = useState(false);

    return(
        <div>
            <nav className="nav">
                <ul className="logo-button">
                    <p>MSU Media & Information Slot Machine</p>
                </ul>
                <ul className="nav-button">
                    <li>
                        <button onClick={() => setShowHowToPlay(true)}>How To Play</button>
                    </li>
                    <li>
                        <button onClick={() => setShowProfessors(true)}>Professors</button>
                    </li>
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
            <button class="backtotopbutton">^</button>
        </div>
    )
}

export default App
