import React from 'react';

const Event = (props) => {
    // console.log(event);
    const event = props.event;
    const { name, image, background} = event;

    const eventStyle ={
        backgroundColor: background
    }
    return (
        <div className="col-md-3 mb-3">
            <div className="m-3 shadow rounded p-3 h-100" style={eventStyle}>
                <img className="img-fluid" src={image} alt=""></img>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Event;