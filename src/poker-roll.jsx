import React, { useState, useEffect } from 'react'

function PokerRoll(){

    const [showDeck, setDeck] = useState([]);
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/deck.json')
            .then(res => res.json())
            .then(data => setDeck(data))
            .catch(err => console.error('Failed to load deck:', err));
    }, []);

    function drawFive(){
        let cardList = [];
        for(let i = 0; i < 5; i++){
            const currentCard = showDeck[Math.floor(Math.random() * (showDeck.length - 1))];
            if(cardList.includes(currentCard)){
                i--;
            }else{
                cardList.push(currentCard);
            }
        }
        return(cardList);
    }

    const cards = drawFive();

    return(
        <div>
            
        </div>
    )

}

export default PokerRoll