import React from 'react';

const SingleRegistration = (props) => {
    const reg = props.reg;
    const { userName, email, eventName, date } = reg;
    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{eventName}</td>
            <td>{date}</td>
            <td><button className="btn btn-danger">DELETE</button></td>
        </tr>
    );
};

export default SingleRegistration;