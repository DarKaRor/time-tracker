import React from 'react';
import { Profile } from './Profile';

export const Selector = (props) => {

    const handleClick = (type) => props.onClick(type);

    const checkType = (type) =>  props.type == type ? " active" : "";

    return (
        <div className="selector">
            <Profile user={props.user} />
            <div className="selector__options">
                <p className={"selector__option" + checkType('daily')} onClick={() => {
                    handleClick('daily');
                }}>Daily</p>
                <p className={"selector__option" + checkType('weekly')} onClick={() => {
                    handleClick('weekly');
                }}>Weekly</p>
                <p className={"selector__option" + checkType('monthly')} onClick={() => {
                    handleClick('monthly');
                }}>Monthly</p>
            </div>
        </div>
    );
}

