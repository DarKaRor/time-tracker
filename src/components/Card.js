import React from "react";
import { getImage } from "../utils/utils";


export const Card = (props) => {

    let { card } = props;
    let { timeframes } = card;

    const handleClick = () => props.onClick(props.id);

    return (
        <article className="card">
            <div className="card__img" style={{ backgroundColor: card.color }}>
                <img src={getImage(card.image)} alt="Card Avatar" />
            </div>
            <div className="card__content">
                <div className="top">
                    <h2 className="card__title">{card.title}</h2>
                    <img src={getImage("icon-ellipsis.svg")} alt="Icon" className="card__options" onClick={handleClick} />
                </div>
                <div className="bottom">
                    <h2 className="card__hours">
                        {timeframes.current}hrs
                    </h2>
                    <p className="card__text">
                        {`Last ${getName(timeframes.type)} - ${timeframes.prev}hrs`}
                    </p>
                </div>
            </div>

        </article>
    );
}

const getName = (type) => {
    switch (type) {
        case "daily": return "Day";
        case "weekly": return "Week";
        case "monthly": return "Month";
    }
}