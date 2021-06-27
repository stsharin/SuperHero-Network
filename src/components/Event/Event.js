import React from 'react';

const Event = (props) => {
    // console.log(event);
    const event = props.event;
    const { name, image, background } = event;

    const eventStyle = {
        backgroundColor: background,
        width: "17rem",
        padding: "0"
    }
    return (
        <button className="card h-100 m-3" style={eventStyle} >
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title" style={{ color: 'white' }}>{name}</h5>
            </div>
        </button>

        // <div className="col-md-3 mb-3">
        //         <div className="m-3 shadow rounded p-3 h-100" style={eventStyle}>
        //             <img className="img-fluid" src={image} alt=""></img>
        //             <h4>{name}</h4>
        //         </div>
        //  </div>
    );
};

export default Event;