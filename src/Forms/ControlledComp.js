// controlled components:
// It’s called a controlled component because React controls the state of the form.
// In a controlled component, the from values are managed by React and not the DOM.
// They do not require us to use refs.

import React, { useState } from 'react';

export default function AddColorFormCC({ onNewColor = (f) => f }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    const submit = (e) => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle('');
        setColor('');
    };
    return (
        <form onSubmit={submit}>
            <input
                type='text'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder='color title...'
                required
            />
            <input
                type='color'
                value={color}
                onChange={(event) => setColor(event.target.value)}
                placeholder='color hex...'
                required
            />
            <button>ADD</button>
        </form>
    );
}
