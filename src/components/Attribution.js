import React from "react";

export const Attribution = (props) => {
    return (
        <footer className="attribution">
            <p className="attribution__name">Coded by <span>{props.name}</span></p>
            <p className="attribution__challenge">Challenge by <span>{props.challenge}</span></p>
        </footer>
    );
}