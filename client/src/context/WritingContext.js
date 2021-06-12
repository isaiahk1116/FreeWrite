import React, { useState, createContext } from 'react';

export const WritingContext = createContext();

export const WritingProvider = (props) => {
    const [choice, setChoice] = useState();
    const [pause, setPause] = useState(true);
    const [prompt, setPrompt] = useState("");

    return (
        <WritingContext.Provider value={{ choice: [choice, setChoice], pause: [pause, setPause], prompt: [prompt, setPrompt] }}>
            {props.children}
        </WritingContext.Provider>
    );
}
