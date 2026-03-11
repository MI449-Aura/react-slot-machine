import React, { useState } from 'react'
import './App.css'

function Home() {

    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [showProfessors, setShowProfessors] = useState(false);

    const handleScrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

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
                <img src="/images/CASINO.png" class="cainso" alt="Casino" title="Casino"/>
                <div class="slots">
                    <ul class="slot">
                        <li><img/></li>
                    </ul>
                    <ul class="slot">
                        <li><img/></li>
                    </ul>
                    <ul class="slot">
                        <li><img/></li>
                    </ul>
                </div>
                <button class="spinbutton">SPIN</button>
            </div>
            <div class="pastspins">
                <h2>Past 5 Spins</h2>
                <section class="spingrid">
                    <ul class="homespinrow">
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                    </ul>
                    <ul class="homespinrow">
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                    </ul>
                    <ul class="homespinrow">
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                    </ul>
                    <ul class="homespinrow">
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                    </ul>
                    <ul class="homespinrow">
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                        <li><img class="resultimg"/></li>
                    </ul>
                </section>
            </div>

            {showHowToPlay && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={() => setShowHowToPlay(false)}>X</button>
                        <h1>How To Play</h1>
                        <p>Click on the <strong>SPIN</strong> button to start the slot machine. It will give three random picutres of professors. If all three manage to be identical, you win the suprising reward... of visiting their offical MSU profile!</p>
                        <ul className="spinrow">
                            <li><img src="/images/Jeff-Siarto.jpg" class="howtojeff" alt="Jeff Siarto" title="Jeff Siarto"/></li>
                            <li><img src="/images/Jeff-Siarto.jpg" class="howtojeff" alt="Jeff Siarto" title="Jeff Siarto"/></li>
                            <li><img src="/images/Jeff-Siarto.jpg" class="howtojeff" alt="Jeff Siarto" title="Jeff Siarto"/></li>
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
                                <img src="/images/Jeff-Siarto.jpg" class="profimg" alt="Jeff Siarto" title="Jeff Siarto"/>
                                <figcaption>Jeff Siarto</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Young-Arygris.jpg" class="profimg" alt="Young Arygris" title="Young Arygris"/>
                                <figcaption>Young Arygris</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Susan-Bonner.jpg" class="profimg" alt="Susan Bonner" title="Susan Bonner"/>
                                <figcaption>Susan Bonner</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Sandra-Braman.jpg" class="profimg" alt="Sandra Braman" title="Sandra Braman"/>
                                <figcaption>Sandra Braman</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Celeste-Campos-Castillo.jpg" class="profimg" alt="Celeste Campos-Castillo" title="Celeste Campos-Castillo"/>
                                <figcaption>Celeste Campos-Castillo</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Amanda-Cote.jpg" class="profimg" alt="Amanda Cote" title="Amanda Cote"/>
                                <figcaption>Amanda Cote</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Andrew-Dennis.jpg" class="profimg" alt="Andrew Dennis" title="Andrew Dennis"/>
                                <figcaption>Andrew Dennis</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/David-Ewoldsen.jpg" class="profimg" alt="David Ewoldsen" title="David Ewoldsen"/>
                                <figcaption>David Ewoldsen</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Ricardo-Guimaraes.jpg" class="profimg" alt="Ricardo Guimaraes" title="Ricardo Guimaraes"/>
                                <figcaption>Ricardo Guimaraes</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Keith-Hampton.jpg" class="profimg" alt="Keith Hampton" title="Keith Hampton"/>
                                <figcaption>Keith Hampton</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Jean-Hardy.jpg" class="profimg" alt="Jean Hardy" title="Jean Hardy"/>
                                <figcaption>Jean Hardy</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Cory-Heald.jpg" class="profimg" alt="Cory Heald" title="Cory Heald"/>
                                <figcaption>Cory Heald</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Carrie-Heeter.jpg" class="profimg" alt="Carrie Heeter" title="Carrie Heeter"/>
                                <figcaption>Carrie Heeter</figcaption>
                            </div>
                                <div class="professor">
                                <img src="/images/Megan-Knittel.jpg" class="profimg" alt="Megan Knittel" title="Megan Knittel"/>
                            <figcaption>Megan Knittel</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Nick-Kwiatowski.jpg" class="profimg" alt="Nick Kwiatowski" title="Nick Kwiatowski"/>
                                <figcaption>Nick Kwiatowski</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Hee-Rin-Lee.jpg" class="profimg" alt="Hee Rin Lee" title="Hee Rin Lee"/>
                                <figcaption>Hee Rin Lee</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Megh-Marathe.jpg" class="profimg" alt="Megh Marathe" title="Megh Marathe"/>
                                <figcaption>Megh Marathe</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Casey-ODonnell.jpg" class="profimg" alt="Casey O'Donnell" title="Casey O'Donnell"/>
                                <figcaption>Casey O'Donnell</figcaption>
                            </div>
                            <div class="professor">
                             <img src="/images/Jennifer-Olson.jpg" class="profimg" alt="Jennifer Olson" title="Jennifer Olson"/>
                             <figcaption>Jennifer Olson</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Wei-Peng.jpg" class="profimg" alt="Wei Peng" title="Wei Peng"/>
                                <figcaption>Wei Peng</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Daniel-Putman.jpg" class="profimg" alt="Daniel Putman" title="Daniel Putman"/>
                                <figcaption>Daniel Putman</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Rabindra-Ratan.jpg" class="profimg" alt="Rabindra Ratan" title="Rabindra Ratan"/>
                                <figcaption>Rabindra Ratan</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Ruth-Shillair.jpg" class="profimg" alt="Ruth Shillair" title="Ruth Shillair"/>
                                <figcaption>Ruth Shillair</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Sarah-Swierenga.jpg" class="profimg" alt="Sarah Swierenga" title="Sarah Swierenga"/>
                                <figcaption>Sarah Swierenga</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Ryan-Thompson.jpg" class="profimg" alt="Ryan Thompson" title="Ryan Thompson"/>
                                <figcaption>Ryan Thompson</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Morgan-Vigil-Hayes.jpg" class="profimg" alt="Morgan Vigil-Hayes" title="Morgan Vigil-Hayes"/>
                                <figcaption>Morgan Vigil-Hayes</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Valeta-Wensloff.jpg" class="profimg" alt="Valeta Wensloff" title="Valeta Wensloff"/>
                                <figcaption>Valeta Wensloff</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Brian-Winn.jpg" class="profimg" alt="Brian Winn" title="Brian Winn"/>
                                <figcaption>Brian Winn</figcaption>
                            </div>
                            <div class="professor">
                                <img src="/images/Susan-Wyche.jpg" class="profimg" alt="Susan Wyche" title="Susan Wyche"/>
                                <figcaption>Susan Wyche</figcaption>
                            </div>
                            </div>
                        </div>
                    </div>
            )}
            <button onClick={handleScrollTop} class="backtotopbutton">^</button>
        </div>
    )
}

export default Home
