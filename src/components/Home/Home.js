import React from 'react';
import Navbar from '../Navbar/Navbar';
import TotalEvents from '../TotalEvents/TotalEvents';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="custom-header">
                <Navbar />
                <div className="container">
                    <div className="m-5">
                        <h3 className="text-center" style={{ color: 'white' }}>WHO HELP PEOPLE IN NEED ARE THE REAL SUPERHEROS</h3>
                        <h6 className="text-center" style={{ color: 'white' }}>Register Now And Be A SUPERHERO</h6>
                        <div className="d-flex justify-content-center m-3">
                            <input className="form-control" type="text" placeholder="Search..."></input>
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <TotalEvents />
            </div>
        </div>
    );
};

export default Home;