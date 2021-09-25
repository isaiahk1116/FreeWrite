import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="homelink">FreeWrite</Link>
        </div>
    );
};

export default Navbar;