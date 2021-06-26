import React from 'react';
import TotalEvents from '../TotalEvents/TotalEvents';

const Home = () => {
    return (
        <div className="container">
            <div className="m-5">
                <h3 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h3>
                <div className="d-flex justify-content-center">
                    <input className="form-control" type="text" placeholder="Search..."></input>
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
            <TotalEvents/>
        </div>
    );
};

export default Home;