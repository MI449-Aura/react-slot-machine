import React from 'react'

function HowToPlay() {
    return(
        <div>
            <div class="howto">
        <div class="popupnav">
            <h1>How to play</h1>
            <button><a href="/index.html" title="home">X</a></button>
        </div>
        <p>Click on the <strong>SPIN</strong> button to start the slot machine. It will give three random picutres of professors. If all three manage to be identical, you win the suprising reward... of visiting their offical MSU profile!</p>
        <ul class="spinrow">
            <li><img src="/images/Jeff-Siarto.jpg" alt="Jeff Siarto" title="Jeff Siarto"/></li>
            <li><img src="/images/Jeff-Siarto.jpg" alt="Jeff Siarto" title="Jeff Siarto"/></li>
            <li><img src="/images/Jeff-Siarto.jpg" alt="Jeff Siarto" title="Jeff Siarto"/></li>
        </ul>
        <p>If all three images are the world-renowned designer, author, and software developer Professor Jeff Siarto, you have hit the <strong>JACKPOT!!!</strong></p>
    </div>
        </div>
    );
}

export default HowToPlay;