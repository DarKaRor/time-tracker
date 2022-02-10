import {User} from '../classes/User';
import {Selector} from './Selector';
import {Cards} from './Cards';
import React, {useState , useEffect} from 'react';

export const TimeTracker = () => {
    const [type, setType] = useState('weekly');

    const handleClick = (type) => {
        setType(type);
    }

    useEffect(() => {
        let cardHours = document.querySelectorAll('.card__hours');
        let timeoutId;
        
        cardHours.forEach(e => {
            let {classList} = e;
            classList.add('appear');
            timeoutId = setTimeout(() => {classList.remove('appear')} , 500);
        });

        return () =>{
            clearTimeout(timeoutId);
        }
    },[type]);

    const [user, setUser] = useState(new User('Jeremy Robson','image-jeremy.png','data.json'));

    return (
        <section className="time-tracker">
            <Selector user={user} onClick={handleClick} type={type} />
            <Cards type={type} />
        </section>
    );
}