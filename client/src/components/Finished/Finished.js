import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { WritingContext } from '../../context/WritingContext';

const Finished = () => {
    const { push } = useHistory();
    const { choice } = useContext(WritingContext);

    // eslint-disable-next-line
    const [choiceValue, setChoiceValue] = choice;

    return (
        <>
            {choiceValue === 'Focused' ? 
                <>
                    <h3>Awesome, you're all done!</h3>
                    <button onClick={() => push('/')}>Return Home</button>
                </>
                : 
                <>
                    <button onClick={() => push('/write')}>Keep Writing</button>
                    <button onClick={() => push('/')}>Finish</button>
                </>
            }
        </>
    );
};

export default Finished;