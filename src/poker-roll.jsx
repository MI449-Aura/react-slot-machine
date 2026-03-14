import React, { useState, useEffect } from 'react'

function PokerRoll({Trigger}){

    const [showDeck, setDeck] = useState([]);
    let cardList = [];
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/deck.json')
            .then(res => res.json())
            .then(data => setDeck(data))
            .catch(err => console.error('Failed to load deck:', err));
    }, [Trigger]);

    function drawFive(){
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

    var card_one = document.getElementsByClassName("card-1");
    var card_two = document.getElementsByClassName("card-2");
    var card_three = document.getElementsByClassName("card-3");
    var card_four = document.getElementsByClassName("card-4");
    var card_five = document.getElementsByClassName("card-5");

    card_one.src = cardList[0].image;
    card_two.src = cardList[1].image;
    card_three.src = cardList[2].image;
    card_four.src = cardList[3].image;
    card_five.src = cardList[4].image;

    return(
        <div id="cards">
            <div id="cards-sect-1">
                <img className="card-1" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/red_joker.svg"></img>
                <img className="card-2" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/black_joker.svg"></img>
                <img className="card-3" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/red_joker.svg"></img>
                <img className="card-4" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/black_joker.svg"></img>
                <img className="card-5" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/red_joker.svg"></img>
            </div>
            <div id="cards-sect-2">
                <img className="card-1" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/red_joker.svg"></img>
                <img className="card-2" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/black_joker.svg"></img>
                <img className="card-3" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/red_joker.svg"></img>
                <img className="card-4" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/black_joker.svg"></img>
                <img className="card-5" src="https://raw.githubusercontent.com/MI449-Aura/card-deck-api/refs/heads/main/images/red_joker.svg"></img>
            </div>
        </div>
    )

}

export default PokerRoll