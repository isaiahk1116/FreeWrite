import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const { push } = useHistory();

    return (
        <>
            <h2><span id="inner">Write</span>.</h2>
            <h2><span id="inner">Write</span> it right.</h2>
            <h2><span id="inner">Write</span> it wrong-but <span id="inner">write</span> it!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <button className="option-btn" onClick={() => push('/select')}>Let's get started</button>
        </>
    );
};

export default Home;