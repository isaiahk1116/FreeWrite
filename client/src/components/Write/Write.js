import React, { useState } from 'react';

import Form from '../Form/Form';
import Timer from '../Timer/Timer';

const Write = () => {
    const [timesUp, setTimesUp] = useState(false);

    return (
        <div className="write-container">
            <Timer timesUp={timesUp} setTimesUp={setTimesUp} />
            <Form timesUp={timesUp} />
        </div>
    );
};

export default Write;