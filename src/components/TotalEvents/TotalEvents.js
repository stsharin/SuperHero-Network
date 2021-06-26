import React from 'react';
import eventData from '../../components/fakeData/fakeData.json';
import Event from '../Event/Event';

const TotalEvents = () => {
    // console.log(fakeData);
    return (
        <div className="row">
            {
                // passing data to child component
                eventData.map(e => <Event event={e}></Event>)
            }
        </div>
    );
};

export default TotalEvents;