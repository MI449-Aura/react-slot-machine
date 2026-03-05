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
                            <div class="professor">
                                <img src="/images/Andrew-Dennis.jpg" alt="Andrew Dennis" title="Andrew Dennis"/>
                                <figcaption>Andrew Dennis</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/David-Ewoldsen.jpg" alt="David Ewoldsen" title="David Ewoldsen"/>
                                <figcaption>David Ewoldsen</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Ricardo-Guimaraes.jpg" alt="Ricardo Guimaraes" title="Ricardo Guimaraes"/>
                                <figcaption>Ricardo Guimaraes</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Keith-Hampton.jpg" alt="Keith Hampton" title="Keith Hampton"/>
                                <figcaption>Keith Hampton</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Jean-Hardy.jpg" alt="Jean Hardy" title="Jean Hardy"/>
                                <figcaption>Jean Hardy</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Cory-Heald.jpg" alt="Cory Heald" title="Cory Heald"/>
                                <figcaption>Cory Heald</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Carrie-Heeter.jpg" alt="Carrie Heeter" title="Carrie Heeter"/>
                                <figcaption>Carrie Heeter</figcaption>
                            </div>
                                <div class="professor">
                                <img src="/images/Megan-Knittel.jpg" alt="Megan Knittel" title="Megan Knittel"/>
                            <figcaption>Megan Knittel</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Nick-Kwiatowski.jpg" alt="Nick Kwiatowski" title="Nick Kwiatowski"/>
                                <figcaption>Nick Kwiatowski</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Hee-Rin-Lee.jpg" alt="Hee Rin Lee" title="Hee Rin Lee"/>
                                <figcaption>Hee Rin Lee</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Megh-Marathe.jpg" alt="Megh Marathe" title="Megh Marathe"/>
                                <figcaption>Megh Marathe</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Casey-ODonnell.jpg" alt="Casey O'Donnell" title="Casey O'Donnell"/>
                                <figcaption>Casey O'Donnell</figcaption>
                            </div>
                            <div class="professor">
                             <img src="/images/Jennifer-Olson.jpg" alt="Jennifer Olson" title="Jennifer Olson"/>
                             <figcaption>Jennifer Olson</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Wei-Peng.jpg" alt="Wei Peng" title="Wei Peng"/>
                                <figcaption>Wei Peng</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Daniel-Putman.jpg" alt="Daniel Putman" title="Daniel Putman"/>
                                <figcaption>Daniel Putman</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Rabindra-Ratan.jpg" alt="Rabindra Ratan" title="Rabindra Ratan"/>
                                <figcaption>Rabindra Ratan</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Ruth-Shillair.jpg" alt="Ruth Shillair" title="Ruth Shillair"/>
                                <figcaption>Ruth Shillair</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Sarah-Swierenga.jpg" alt="Sarah Swierenga" title="Sarah Swierenga"/>
                                <figcaption>Sarah Swierenga</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Ryan-Thompson.jpg" alt="Ryan Thompson" title="Ryan Thompson"/>
                                <figcaption>Ryan Thompson</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Morgan-Vigil-Hayes.jpg" alt="Morgan Vigil-Hayes" title="Morgan Vigil-Hayes"/>
                                <figcaption>Morgan Vigil-Hayes</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Valeta-Wensloff.jpg" alt="Valeta Wensloff" title="Valeta Wensloff"/>
                                <figcaption>Valeta Wensloff</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Brian-Winn.jpg" alt="Brian Winn" title="Brian Winn"/>
                                <figcaption>Brian Winn</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Susan-Wyche.jpg" alt="Susan Wyche" title="Susan Wyche"/>
                                <figcaption>Susan Wyche</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/.jpg" alt="Jeff Siarto" title="Jeff Siarto"/>
                                <figcaption>Golden Jeff</figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <button class="backtotopbutton">^</button>
        </div>
    )
}

export default Home
