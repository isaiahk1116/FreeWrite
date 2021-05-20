import React from 'react';

import { useHistory } from 'react-router-dom';

const Home = () => {
    const { push } = useHistory();

    return (
        <div className="container">
            <h2>Welcome to FreeWrite!</h2>
            <button className="option-btn" onClick={() => push('/select')}>Let's get started</button>
        </div>
    );
};

export default Home;