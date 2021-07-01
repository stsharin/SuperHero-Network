import React from 'react';
import { useHistory } from 'react-router-dom';

const MySingleEvent = (props) => {
    const event = props.event;
    const {_id, userName, eventName, date, image } = event;
    const history = useHistory();

    const handleCancel = () => {
        fetch(`https://mysterious-plateau-71706.herokuapp.com/deleteRegistration/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('Your event is successfully Canceled');
                history.replace('/');
            })
    }

    return (
        <div className="col-md-6">
            <div className="d-flex justify-content-between shadow p-5 m-3 rounded">
                <div className="mb-2 me-2 col-md-6">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="col-md-6 m-5 p-2 h-100">
                    <h3>{userName}</h3>
                    <h4>Event: {eventName}</h4>
                    <h5>Date: {date}</h5>
                    <button onClick={handleCancel} className="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleEvent;