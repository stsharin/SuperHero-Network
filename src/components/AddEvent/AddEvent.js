import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AddEvent = () => {

    const [event, setEvent] = useState({});
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://mysterious-plateau-71706.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    const handleOnBlur = (e) => {
        const newEvent = event;
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <h3 className="m-5 text-center">Add a new Event</h3>
                    <form onSubmit={handleSubmit}>
                        <input onBlur={handleOnBlur} className="form-control" type="text" name="name" placeholder="Event Name" required />
                        <br />
                        <input onBlur={handleOnBlur} className="form-control" type="text" name="img" placeholder="Image URL" required />
                        <br/>
                        <input onBlur={handleOnBlur} className="form-control" type="text" name="description" placeholder="Event Description" required />
                        <br /><br />
                        <button className="btn btn-primary">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;