import React, { useState, useEffect } from 'react'
import Quote from './Quote.jsx'
import './App.css'
import PokerRoll from './poker-roll.jsx'

function Home() {

    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [showProfessors, setShowProfessors] = useState(false);
    const [showJackpot, setShowJackpot] = useState(false);
    const [winningProfessor, setWinningProfessor] = useState(null);
    const [professors, setProfessors] = useState([]);
    const [slotResults, setSlotResults] = useState([null, null, null]);
    const [pastSpins, setPastSpins] = useState([]);
    const [spinCount, setSpinCount] = useState(0);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MI449-Aura/mi-department-professors-api/main/professors.json')
            .then(res => res.json())
            .then(data => setProfessors(data))
            .catch(err => console.error('Failed to load professors:', err));
    }, []);

    const getRandomProfessorImage = () => {
        if (professors.length === 0) return null;
        const randomProf = professors[Math.floor(Math.random() * professors.length)];
        return randomProf.image;
    }

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '/images/placeholder.jpg';
        if (imagePath.startsWith('http')) return imagePath;
        return `https://raw.githubusercontent.com/MI449-Aura/mi-department-professors-api/main${imagePath}`;
    };

    const handleSpin = () => {
        const newResults = [
            getRandomProfessorImage(),
            getRandomProfessorImage(),
            getRandomProfessorImage()
        ];
        setSlotResults(newResults);

        setPastSpins( prev => {
            const updated = [[...newResults], ...prev].slice(0,5);
            return updated;
        })
        setSpinCount(prev => prev + 1);

        if (
            newResults[0] && 
            newResults[0] === newResults[1] && 
            newResults[1] === newResults[2]
        ) {
            const winningProfessor = professors.find(p => p.image === newResults[0]);
            setWinningProfessor(winningProfessor);
            setShowJackpot(true);
        }
    };

    const handleScrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return(
        <div>
            
            <PokerRoll />
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

            <div className="slot-machine">
                <img src="/images/CASINO.png" className="cainso" alt="Casino" title="Casino"/>
                <div className="slots">
                    <ul className="slot">
                        <li>
                            <img src={getImageUrl(slotResults[0])} className="slotimg" alt="Slot 1"/>
                        </li>
                    </ul>
                    <ul className="slot">
                        <li>
                            <img src={getImageUrl(slotResults[1])} className="slotimg" alt="Slot 2"/>
                        </li>
                    </ul>
                    <ul className="slot">
                        <li>
                            <img src={getImageUrl(slotResults[2])} className="slotimg" alt="Slot 3"/>
                        </li>
                    </ul>
                </div>
                <button className="spinbutton" onClick={handleSpin}>SPIN</button>
                <Quote spinTrigger={spinCount} />
            </div>
            <div className="pastspins">
                <h2>Past 5 Spins</h2>
                <section className="spingrid">
                    {pastSpins.map((spin, index) => (
                        <ul key={index} className="homespinrow">
                            {spin.map((imgPath, imgIndex) => (
                                <li key={imgIndex}>
                                    <img
                                        className="resultimg"
                                        src={getImageUrl(imgPath)}
                                        alt={`Past Spin ${index + 1}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    ))}
                    {Array(5 - pastSpins.length).fill().map((_, index) => (
                        <ul key={`empty-${index}`} className="homespinrow">
                            <li><img className="resultimg" src="/images/placeholder.jpg" alt="Empty Slot"/></li>
                            <li><img className="resultimg" src="/images/placeholder.jpg" alt="Empty Slot"/></li>
                            <li><img className="resultimg" src="/images/placeholder.jpg" alt="Empty Slot"/></li>
                        </ul>
                    ))}
                </section>
            </div>

            {showJackpot && winningProfessor && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={() => setShowJackpot(false)}>X</button>
                        <h1 className="jackpot-title">JACKPOT!</h1>
                        <p>You got three of the same professor, congratulations! You hit the Jackpot!</p>
                        <div className="jackpot-content">
                            <img src={getImageUrl(winningProfessor.image)} alt="Winning Professor" className="jackpot-img"/>
                            <h2>{winningProfessor.name}</h2>
                            <p>{winningProfessor.position}</p>
                            <button className="reward-button" onClick={() => window.open(winningProfessor.something_cool, '_blank')}>Reward</button>
                        </div>
                    </div>
                </div>
            )}

            {showHowToPlay && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={() => setShowHowToPlay(false)}>X</button>
                        <h1>How To Play</h1>
                        <p>Click on the <strong>SPIN</strong> button to start the slot machine. It will give three random picutres of professors. If all three manage to be identical, you win the suprising reward... of visiting their offical MSU profile!</p>
                        <ul className="spinrow">
                            <li><img src="/images/Jeff-Siarto.jpg" className="howtojeff" alt="Jeff Siarto" title="Jeff Siarto"/></li>
                            <li><img src="/images/Jeff-Siarto.jpg" className="howtojeff" alt="Jeff Siarto" title="Jeff Siarto"/></li>
                            <li><img src="/images/Jeff-Siarto.jpg" className="howtojeff" alt="Jeff Siarto" title="Jeff Siarto"/></li>
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
                        <div className="professorgrid">
                            <div className="professor">
                                <img src="/images/Jeff-Siarto.jpg" className="profimg" alt="Jeff Siarto" title="Jeff Siarto"/>
                                <figcaption>Jeff Siarto</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Young-Arygris.jpg" className="profimg" alt="Young Arygris" title="Young Arygris"/>
                                <figcaption>Young Arygris</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Susan-Bonner.jpg" className="profimg" alt="Susan Bonner" title="Susan Bonner"/>
                                <figcaption>Susan Bonner</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Sandra-Braman.jpg" className="profimg" alt="Sandra Braman" title="Sandra Braman"/>
                                <figcaption>Sandra Braman</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Celeste-Campos-Castillo.jpg" className="profimg" alt="Celeste Campos-Castillo" title="Celeste Campos-Castillo"/>
                                <figcaption>Celeste Campos-Castillo</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Amanda-Cote.jpg" className="profimg" alt="Amanda Cote" title="Amanda Cote"/>
                                <figcaption>Amanda Cote</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Andrew-Dennis.jpg" className="profimg" alt="Andrew Dennis" title="Andrew Dennis"/>
                                <figcaption>Andrew Dennis</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/David-Ewoldsen.jpg" className="profimg" alt="David Ewoldsen" title="David Ewoldsen"/>
                                <figcaption>David Ewoldsen</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Ricardo-Guimaraes.jpg" className="profimg" alt="Ricardo Guimaraes" title="Ricardo Guimaraes"/>
                                <figcaption>Ricardo Guimaraes</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Keith-Hampton.jpg" className="profimg" alt="Keith Hampton" title="Keith Hampton"/>
                                <figcaption>Keith Hampton</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Jean-Hardy.jpg" className="profimg" alt="Jean Hardy" title="Jean Hardy"/>
                                <figcaption>Jean Hardy</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Cory-Heald.jpg" className="profimg" alt="Cory Heald" title="Cory Heald"/>
                                <figcaption>Cory Heald</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Carrie-Heeter.jpg" className="profimg" alt="Carrie Heeter" title="Carrie Heeter"/>
                                <figcaption>Carrie Heeter</figcaption>
                            </div>
                                <div className="professor">
                                <img src="/images/Megan-Knittel.jpg" className="profimg" alt="Megan Knittel" title="Megan Knittel"/>
                            <figcaption>Megan Knittel</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Nick-Kwiatowski.jpg" className="profimg" alt="Nick Kwiatowski" title="Nick Kwiatowski"/>
                                <figcaption>Nick Kwiatowski</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Hee-Rin-Lee.jpg" className="profimg" alt="Hee Rin Lee" title="Hee Rin Lee"/>
                                <figcaption>Hee Rin Lee</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Megh-Marathe.jpg" className="profimg" alt="Megh Marathe" title="Megh Marathe"/>
                                <figcaption>Megh Marathe</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Casey-ODonnell.jpg" className="profimg" alt="Casey O'Donnell" title="Casey O'Donnell"/>
                                <figcaption>Casey O'Donnell</figcaption>
                            </div>
                            <div className="professor">
                             <img src="/images/Jennifer-Olson.jpg" className="profimg" alt="Jennifer Olson" title="Jennifer Olson"/>
                             <figcaption>Jennifer Olson</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Wei-Peng.jpg" className="profimg" alt="Wei Peng" title="Wei Peng"/>
                                <figcaption>Wei Peng</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Daniel-Putman.jpg" className="profimg" alt="Daniel Putman" title="Daniel Putman"/>
                                <figcaption>Daniel Putman</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Rabindra-Ratan.jpg" className="profimg" alt="Rabindra Ratan" title="Rabindra Ratan"/>
                                <figcaption>Rabindra Ratan</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Ruth-Shillair.jpg" className="profimg" alt="Ruth Shillair" title="Ruth Shillair"/>
                                <figcaption>Ruth Shillair</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Sarah-Swierenga.jpg" className="profimg" alt="Sarah Swierenga" title="Sarah Swierenga"/>
                                <figcaption>Sarah Swierenga</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Ryan-Thompson.jpg" className="profimg" alt="Ryan Thompson" title="Ryan Thompson"/>
                                <figcaption>Ryan Thompson</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Morgan-Vigil-Hayes.jpg" className="profimg" alt="Morgan Vigil-Hayes" title="Morgan Vigil-Hayes"/>
                                <figcaption>Morgan Vigil-Hayes</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Valeta-Wensloff.jpg" className="profimg" alt="Valeta Wensloff" title="Valeta Wensloff"/>
                                <figcaption>Valeta Wensloff</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Brian-Winn.jpg" className="profimg" alt="Brian Winn" title="Brian Winn"/>
                                <figcaption>Brian Winn</figcaption>
                            </div>
                            <div className="professor">
                                <img src="/images/Susan-Wyche.jpg" className="profimg" alt="Susan Wyche" title="Susan Wyche"/>
                                <figcaption>Susan Wyche</figcaption>
                            </div>
                            </div>
                        </div>
                    </div>
            )}
            <button onClick={handleScrollTop} className="backtotopbutton">^</button>
        </div>
    )
}

export default Home
