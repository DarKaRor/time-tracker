import { render } from '@testing-library/react';
import React from 'react';

export const Profile = (props) => {
    return (
        <div className="profile">
            <div className="profile__img">
                <img src={require('../images/image-jeremy.png')} alt="profile" />
            </div>
            <p className="profile__text">Report for</p>
            <h2 className="profile__name">{props.user.name}</h2>
        </div>
    );
}