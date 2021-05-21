import React from 'react';

import { useHistory } from 'react-router-dom';

const Select = () => {
    const { push } = useHistory();

    return (
        <>
            <h3>Select one of the following to begin:</h3>
            <button className="option-btn"onClick={() => push('/write')}>Focused</button>
        </>
    );
};

export default Select;