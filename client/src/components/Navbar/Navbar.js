import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="home">FreeWrite</Link>
            <button className="btn">Login</button>
        </div>
    );
};

export default Navbar;