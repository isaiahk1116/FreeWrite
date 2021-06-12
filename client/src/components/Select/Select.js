import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { WritingContext } from '../../context/WritingContext';

const Select = () => {
    const { push } = useHistory();
    const { choice } = useContext(WritingContext);

    // eslint-disable-next-line
    const [choiceValue, setChoiceValue] = choice;

    const handleClick = (e) => {
        setChoiceValue(e.target.innerText);

        push('/write');
    };

    return (
        <>
            <h3>Select one of the following to begin:</h3>
            <button className="option-btn"onClick={handleClick}>Focused</button>
            <button className="option-btn"onClick={handleClick}>Loop</button>
        </>
    );
};

export default Select;