import React from 'react';
import TotalEvents from '../TotalEvents/TotalEvents';

const Home = () => {
    return (
        <div className="container">
            <div className="m-5">
                <h3 className="text-center">WHO HELP PEOPLE IN NEED ARE THE REAL SUPERHEROS</h3>
                <h6 className="text-center text-info">Register Now And Be A SUPERHERO</h6>
                <div className="d-flex justify-content-center m-3">
                    <input className="form-control" type="text" placeholder="Search..."></input>
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
            <TotalEvents/>
        </div>
    );
};

export default Home;