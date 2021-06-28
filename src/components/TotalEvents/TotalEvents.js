import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
// import eventData from '../../components/fakeData/fakeData.json';

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
                eventData.map(e => <Event event={e}></Event>)  // passing data to child component
            }
        </div>
    );
};

export default TotalEvents;