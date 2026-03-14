import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './poker-roll.css'

function PokerRoll(){
    
    const [showDeck, setShowDeck] = useState([]);
    const [DrawCards, setDrawCards] = useState([]);
    
    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then(res => res.json())
            .then(data => setShowDeck(data))
            .catch(err => console.error('Failed to load deck:', err));
    }, []);

    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/"+showDeck.deck_id+"/draw/?count=5")
            .then(res => res.json())
            .then(data => setDrawCards(data))
            .catch(err => console.error('Failed to draw cards:', err));
    }, []);

    var src_1 = DrawCards.cards[0].image
    var src_2 = DrawCards.cards[1].image
    var src_3 = DrawCards.cards[2].image
    var src_4 = DrawCards.cards[3].image
    var src_5 = DrawCards.cards[4].image
    var img_1 = document.getElementByClassName("img-1")
    var img_2 = document.getElementByClassName("img-2")
    var img_3 = document.getElementByClassName("img-3")
    var img_4 = document.getElementByClassName("img-4")
    var img_5 = document.getElementByClassName("img-5")

    return(
        <div id="deck-header">
            <div id="roll-sect1">
                <img class="img-1"></img>
                <img class="img-2"></img>
                <img class="img-3"></img>
                <img class="img-4"></img>
                <img class="img-5"></img>
            </div>
            <div id="roll-sect2">
                <img class="img-1"></img>
                <img class="img-2"></img>
                <img class="img-3"></img>
                <img class="img-4"></img>
                <img class="img-5"></img>
            </div>
        </div>
    ) 
}

export default PokerRoll