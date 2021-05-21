import React, { useState } from 'react';

import { createWriting } from '../../api/index';

const Form = ({ timesUp }) => {
    const [writing, setWriting] = useState({ message: '', creator: 'defauit' });

    const clear = () => {
        setWriting({ message: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createWriting(writing);

        clear();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea
                className="input"
                name="message"
                label="message"
                value={writing.message}
                disabled={timesUp}
                onChange={(e) => setWriting({ ...writing, message: e.target.value})}
            >
            </textarea>
            <button className="submit-btn" type="submit">Submit</button>
        </form>
    );
};

export default Form;