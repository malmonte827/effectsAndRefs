import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

function Deck() {
    const [deck, setDeck] = useState(null);
    const [draw, setDraw] = useState([]);

    useEffect(function getDeck() {
        async function fetchDeck() {
            const res = await axios.get(`${API_BASE_URL}/new/shuffle`);
            setDeck(res.data);
        }
        fetchDeck();
    }, []);

    async function drawCard() {
        const res = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw`);

        const card = res.data.cards[0];

        setDraw((d) => [
            ...d,
            {
                id: card.code,
                name: `${card.suit} ${card.value}`,
                image: card.image,
            },
        ]);
    }

    function renderDrawBtn(){
        return(
            <button
            onClick={drawCard}
            >Draw!</button>
        )
    }


    return (
        <section>
            {renderDrawBtn}
        <div>{
            draw.map(c =>(
                <Card key={c.id} name={c.name} image={c.image}/>
            ))}
        </div>
        </section>
    )
    
}

export default Deck;
