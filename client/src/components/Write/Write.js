import React, { useState, useContext } from 'react';

import { WritingContext } from '../../context/WritingContext';

import Form from '../Form/Form';
import Timer from '../Timer/Timer';

const Write = () => {
    const [activePrompt, setActivePrompt] = useState(false);

    const { prompt } = useContext(WritingContext);
    const { pause } = useContext(WritingContext);

    const [promptValue, setPromptValue] = prompt;
    const [pauseValue, setPauseValue] = pause;

    const prompts = [
        "What are your goals?",
        "If you could do anything for work, what would you do?",
        "You've discovered a new planet, what do you see?",
        "Write about a time you failed.",
        "If you could travel back in time, where would you go?",
        "Turn the last song you listened to into a story.",
        "Write about your biggest fear"
    ];

    const handleClick = () => {
        setActivePrompt(true);

        let randomNumber = Math.floor(Math.random() * prompts.length);

        setPromptValue(prompts[randomNumber]);
    };

    return (
        <>
            <h3>{activePrompt ? promptValue : ''}</h3>
            <button className="generate-btn" onClick={handleClick}>Generate Prompt</button>
            <div className="write-container">
                <Timer pause={pauseValue} setPause={setPauseValue} />
                <Form pause={pauseValue} />
            </div>
        </>
    );
};

export default Write;