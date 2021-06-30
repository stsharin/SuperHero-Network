import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="m-3 p-5">
            <Link to="/allRegistration"><h5>All Registration</h5></Link>
            <Link to="/addEvent"><h5>Add Event</h5></Link>
        </div>
    );
};

export default Sidebar;