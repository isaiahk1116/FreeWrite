import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="homelink">FreeWrite</Link>
            <button className="login-btn">Login</button>
        </div>
    );
};

export default Navbar;