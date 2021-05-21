import React, { useState } from 'react';

import Form from '../Form/Form';
import Timer from '../Timer/Timer';

const Write = () => {
    const [timesUp, setTimesUp] = useState(false);
    const [activePrompt, setActivePrompt] = useState(false);
    const [currentPrompt, setCurrentPrompt] = useState("");

    const prompts = [
        "What are your goals?",
        "If you could do anything for work, what would you do?",
        "You've discovered a new planet, what do you see?",
    ];

    const handleClick = () => {
        setActivePrompt(true);

        let randomNumber = Math.floor(Math.random() * prompts.length);

        setCurrentPrompt(prompts[randomNumber]);
    };

    return (
        <>
            <h3>{activePrompt ? currentPrompt : ''}</h3>
            <button className="generate-btn" onClick={handleClick}>Generate Prompt</button>
            <div className="write-container">
                <Timer timesUp={timesUp} setTimesUp={setTimesUp} />
                <Form timesUp={timesUp} />
            </div>
        </>
    );
};

export default Write;