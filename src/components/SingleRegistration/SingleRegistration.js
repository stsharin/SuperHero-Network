import React from 'react';
import { useHistory } from 'react-router-dom';

const SingleRegistration = (props) => {
    const reg = props.reg;
    const { _id, userName, email, eventName, date } = reg;
    const history = useHistory();

    const handleDelete = () =>{
        fetch(`http://localhost:5000/deleteRegistration/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=> {
            alert('Your event is successfully deleted')
            history.replace('/allRegistration');
        })
    }

    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{eventName}</td>
            <td>{date}</td>
            <td><button onClick={handleDelete} className="btn btn-danger">DELETE</button></td>
        </tr>
    );
};

export default SingleRegistration;