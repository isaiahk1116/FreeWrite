import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ pause, setPause }) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [timesUp, setTimesUp] = useState(false);

    const intervalRef = useRef();

    const increment = () => {
        setSeconds((prev) => prev + 1);
    };

    // Handles switch for pause button
    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(increment, 1000);
        }

        setPause((prev) => !prev);
    };

    // Resets timer when component is mounted
    useEffect(() => {
        setPause(true);

        return () => clearInterval(intervalRef.current);
        // eslint-disable-next-line
    }, []); 

    // Keeps track of minutes and seconds until time is up
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
                <>
                    <h2>{minutes}:{Math.floor(seconds/10)}{seconds%10}</h2>
                    <button className="timer-btn" onClick={handleClick}>{pause ? "Start" : "Pause"}</button>
                </> :
                <h2>Times Up!</h2>
            }
        </div>
    );
};

export default Timer;