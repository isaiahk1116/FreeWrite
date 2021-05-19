import React, { useState } from 'react';

import { createWriting } from '../../api/index';

const Form = () => {
    const [writing, setWriting] = useState({ message: '', creator: 'defauit' });

    const clear = () => {
        setWriting({ message: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createWriting(writing);

        clear();
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <textarea
                className="txt"
                name="message"
                label="message"
                value={writing.message}
                onChange={(e) => setWriting({ ...writing, message: e.target.value})}
            >
            </textarea>
            <button className="submit" type="submit">Submit</button>
        </form>
    );
};

export default Form;