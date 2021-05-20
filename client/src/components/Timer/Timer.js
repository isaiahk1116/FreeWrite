import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [pause, setPause] = useState(true);

    const intervalRef = useRef();

    const increment = () => {
        setSeconds((prev) => prev + 1);
    };

    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(increment, 1000);
        }

        setPause((prev) => !prev);
    };

    useEffect(() => {
        setPause(true);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (seconds === 599) {
            return () => clearInterval(intervalRef.current);
        }

        if (seconds !== 0 && seconds % 60 === 0) {
            setMinutes((prev) => prev + 1);
        }
    }, [seconds])

    return (
        <div className="timer">
            <h2 className="time">{minutes}:{seconds%60}</h2>
            <button onClick={handleClick}>{pause ? "Start" : "Pause"}</button>
        </div>
    );
};

export default Timer;