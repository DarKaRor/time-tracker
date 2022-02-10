import React, { useState } from 'react';
import { Card } from './Card';
import { CardObj, TimeFrame } from '../classes/CardObj';
import * as data from '../data.json';
import { type } from '@testing-library/user-event/dist/type';

let cardsObj = [];

for (var key in data) {
    let cards = data[key];
    for (var i = 0; i < cards.length; i++) {
        let card = cards[i];
        let timeFrames = [];
        for (const [t, v] of Object.entries(card.timeframes))
            timeFrames.push(new TimeFrame(t, v.current, v.previous));

        cardsObj.push(new CardObj(card.title, card.img, timeFrames, card.color));
    }
}

export const Cards = (props) => {

    const [cards, setCards] = useState(cardsObj);

    const handleClick = (id) => {
        console.log(id);
        let newCards = cards.filter((card, index) => index !== id);
        setCards(newCards);
    }

    return (
        <section className="cards">
            {cards.map((card, i) => {
                let typeCard = { ...card };
                typeCard.timeframes = card.timeframes.find(t => t.type === props.type);
                return <Card key={i} id={i} card={typeCard} onClick={handleClick} />
            }
            )}
        </section>
    )
} 