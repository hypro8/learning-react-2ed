// uncontrolled components:
// The AddColorForm is now what we call an uncontrolled component
// because it uses the DOM to save the form values.

import React, { useState, useRef } from 'react';

export default function AddColorForm({ onNewColor = (f) => f }) {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        onNewColor(title, color);
        txtTitle.current.value = '';
        hexColor.current.value = '';
    };

    return (
        <form onSubmit={submit}>
            <input
                type='text'
                ref={txtTitle}
                placeholder='Color tilte...'
                required
            />
            <input
                type='color'
                ref={hexColor}
                // placeholder='Color hex...'
                required
            />
            <button>ADD</button>
        </form>
    );
}
