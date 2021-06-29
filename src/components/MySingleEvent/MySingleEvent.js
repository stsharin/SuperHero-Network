import React from 'react';

const MySingleEvent = (props) => {
    const event = props.event;
    const { userName, eventName, date, img } = event;
    return (
        <div className="col-md-6">
            <div className="d-flex justify-content-between shadow p-5">
                <div>
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div>
                    <h3>{userName}</h3>
                    <h4>Event: {eventName}</h4>
                    <h5>Date: {date}</h5>
                    <button className="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleEvent;