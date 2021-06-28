import React, { useEffect, useState } from 'react';
// import eventData from '../../components/fakeData/fakeData.json';
import Event from '../Event/Event';

const TotalEvents = () => {
    // console.log(fakeData);

    // will use later
    // const addAllEvents = () => {
    //     fetch('http://localhost:5000/addEvents', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(eventData)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }

    const [eventData, setEventData] = useState([]); 

    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEventData(data));
    })

    return (
        <div className="row">
            {/* <button onClick={addAllEvents}>Add All Event</button> */}
            {
                // passing data to child component
                eventData.map(e => <Event event={e}></Event>)
            }
        </div>
    );
};

export default TotalEvents;