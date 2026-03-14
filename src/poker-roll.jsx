import React, { useState, useEffect } from 'react'

function PokerRoll(){
    
    const [showDraw, setDraw] = useState([]);

    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=5")
            .then(res => res.json())
            .then(data => setDraw(data));
    }, []);

    console.log(showDraw);
    

}

export default PokerRoll