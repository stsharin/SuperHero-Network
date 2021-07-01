import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {
    const event = props.event;  // console.log(event);
    const { _id, name, image, background } = event;

    return (
        <div className="col-md-3 mb-3">
            <Link to={`/RegisterEvent/${_id}`}>
                <div className="m-3 shadow rounded p-3 h-100">
                    <img className="img-fluid" src={image} alt="" />
                    <h4>{name}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Event;