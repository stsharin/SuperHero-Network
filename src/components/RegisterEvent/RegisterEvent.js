import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const RegisterEvent = () => {


    const { id } = useParams();   // console.log(id);
    const history = useHistory();
    const [event, setEvent] = useState({});
    const user = JSON.parse(localStorage.getItem('user')) // console.log(user)
    const [registrationData, setRegistrationData] = useState({
        userName: user.name,
        email: user.email,
        // eventName: event.name,
        // eventDescription: event.description
    })

    const handleDateChange = (e) => {  // console.log(e);
        const newRegistrationData = { ...registrationData };
        newRegistrationData.date = e.target.value;
        setRegistrationData(newRegistrationData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();  // console.log(registrationData);

        if (registrationData.date) {
            fetch('https://mysterious-plateau-71706.herokuapp.com/addRegistration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registrationData)
            })
                .then(res => res.json())
                .then(data => {
                    alert('Your Registration is done successfully.');
                    history.replace('/')
                });
        }
        else {
            alert('Please Select Date!');
        }
    }

    useEffect(() => {
        fetch(`https://mysterious-plateau-71706.herokuapp.com/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                const newRegistrationData = { ...registrationData };
                newRegistrationData.eventName = data.name
                newRegistrationData.eventDescription = data.description
                newRegistrationData.image = data.image
                setRegistrationData(newRegistrationData);
            })
    }, [])

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <form className="form-control m-5" onSubmit={handleSubmit}>
                    <h3>Register as a SuperHero</h3><br />
                    <input type="text" name="userName" placeholder="Username" value={user.name}></input><br /><br />
                    <input type="text" name="eventName" placeholder="Event Name" value={event.name}></input><br /><br />
                    <textarea cols="50" rows="5" type="text" name="description" placeholder="Description" value={event.description}></textarea><br /><br />
                    <input type="date" onChange={handleDateChange} name="date"></input><br /><br />
                    <button className="btn btn-primary">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterEvent;