import React, { useState, useEffect } from 'react'

function PokerRoll({Trigger}){

    const [showDeck, setDeck] = useState([]);
    let cardList = [];
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MI449-Aura/card-deck-api/main/deck.json')
            .then(res => res.json())
            .then(data => setDeck(data))
            .catch(err => console.error('Failed to load deck:', err));
    }, [Trigger]);

    
    for(let i = 0; i < 5; i++){
        if (showDeck.length === 0) return null;
        const currentCard = showDeck[Math.floor(Math.random() * showDeck.length)];
        cardList.push(currentCard);
    }

    const img_prefix_link = "https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/";

    return(
        <div id="cards">
            <div id="cards-sect-1">
                <img src={img_prefix_link+cardList[0].image}></img>
                <img src={img_prefix_link+cardList[1].image}></img>
                <img src={img_prefix_link+cardList[2].image}></img>
                <img src={img_prefix_link+cardList[3].image}></img>
                <img src={img_prefix_link+cardList[4].image}></img>
            </div>
            <div id="cards-sect-2">
                <img src={img_prefix_link+cardList[0].image}></img>
                <img src={img_prefix_link+cardList[1].image}></img>
                <img src={img_prefix_link+cardList[2].image}></img>
                <img src={img_prefix_link+cardList[3].image}></img>
                <img src={img_prefix_link+cardList[4].image}></img>
            </div>
        </div>
    )

}

export default PokerRoll