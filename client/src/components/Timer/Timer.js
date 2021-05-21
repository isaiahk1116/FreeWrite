import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ timesUp, setTimesUp }) => {
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
        if (minutes === 9 && seconds > 59) {
            setTimesUp(true);
            return () => clearInterval(intervalRef.current);
        }

        if (seconds !== 0 && seconds % 60 === 0) {
            setMinutes((prev) => prev + 1);
            setSeconds(0);
        }
    }, [seconds, minutes, setTimesUp])

    return (
        <div className="timer">
            {!timesUp ? 
                <><h2 className="time">{minutes}:{Math.floor(seconds/10)}{seconds%10}</h2>
                <button className="write-btn" onClick={handleClick}>{pause ? "Start" : "Pause"}</button></> :
                <h2>Times Up!</h2>}
        </div>
    );
};

export default Timer;