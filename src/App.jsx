import React, { useState } from 'react'
import './App.css'

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

export default App
