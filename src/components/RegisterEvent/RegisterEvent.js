import React, { useEffect } from 'react';

const RegisterEvent = () => {

    const handleDateChange = (e) => {
        console.log(e);
    }

    const handleSubmit = () => {
        
    }

    useEffect(() => {
        fetch('http://localhost:5000/events/60d8e945891a391eb0a4d2f2')
    }, [])

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <form className="form-control m-5" onSubmit={handleSubmit}>
                    <h3>Register as a SuperHero</h3><br/>
                    <input type="text" name="userName" placeholder="Username"></input><br/><br/>
                    <input type="text" name="eventName" placeholder="Event Name"></input><br/><br/>
                    <input type="text" name="description" placeholder="Description"></input><br/><br/>
                    <input type="date" onChange={handleDateChange} name="date"></input><br/><br/>
                    <button className="btn btn-primary">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterEvent;