import React from 'react';

import { Link } from 'react-router-dom';

const Select = () => {
    return (
        <div className="container">
            <h2>Select one of the following to begin:</h2>
            <div className="select-container">
                <Link to="/write">
                    <button className="btn">Focused</button>
                </Link>
            </div>
        </div>
    );
};

export default Select;