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

            {showHowToPlay && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={() => setShowHowToPlay(false)}>X</button>
                        <h1>How To Play</h1>
                        <p>Click on the <strong>SPIN</strong> button to start the slot machine. It will give three random picutres of professors. If all three manage to be identical, you win the suprising reward... of visiting their offical MSU profile!</p>
                        <ul class="spinrow">
                            <li><img src="/images/Jeff-Siarto.jpg" alt="Jeff Siarto" title="Jeff Siarto"/></li>
                            <li><img src="/images/Jeff-Siarto.jpg" alt="Jeff Siarto" title="Jeff Siarto"/></li>
                            <li><img src="/images/Jeff-Siarto.jpg" alt="Jeff Siarto" title="Jeff Siarto"/></li>
                        </ul>
                        <p>If all three images are the world-renowned designer, author, and software developer Professor Jeff Siarto, you have hit the <strong>JACKPOT!!!</strong></p>
                    </div>
                </div>
            )}

            {showProfessors && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={() => setShowProfessors(false)}>X</button>
                        <h1>Professors</h1>
                        <div class="professorgrid">
                            <div class="professor">
                                <img src="/images/Jeff-Siarto.jpg" alt="Jeff Siarto" title="Jeff Siarto"/>
                                <figcaption>Jeff Siarto</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Young-Arygris.jpg" alt="Young Arygris" title="Young Arygris"/>
                                <figcaption>Young Arygris</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Susan-Bonner.jpg" alt="Susan Bonner" title="Susan Bonner"/>
                                <figcaption>Susan Bonner</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Sandra-Braman.jpg" alt="Sandra Braman" title="Sandra Braman"/>
                                <figcaption>Sandra Braman</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Celeste-Campos-Castillo.jpg" alt="Celeste Campos-Castillo" title="Celeste Campos-Castillo"/>
                                <figcaption>Celeste Campos-Castillo</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Amanda-Cote.jpg" alt="Amanda Cote" title="Amanda Cote"/>
                                <figcaption>Amanda Cote</figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <button class="backtotopbutton">^</button>
        </div>
    )
}

export default App
