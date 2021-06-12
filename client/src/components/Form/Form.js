import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createWriting } from '../../api/index';

const Form = ({ pause }) => {
    const [writing, setWriting] = useState({ message: '', creator: 'defauit' });

    const { push } = useHistory();

    const clear = () => {
        setWriting({ message: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        createWriting(writing);

        clear();

        push('/finished');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea
                className="input"
                name="message"
                label="message"
                value={writing.message}
                disabled={pause}
                onChange={(e) => setWriting({ ...writing, message: e.target.value})}
            >
            </textarea>
            <button className="submit-btn" type="submit">Submit</button>
        </form>
    );
};

export default Form;