import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="container">
            <h2>Welcome to FreeWrite!</h2>
            <Link to="/select">
                <button className="start-btn">Let's get started</button>
            </Link>
        </div>
    );
};

export default Home;