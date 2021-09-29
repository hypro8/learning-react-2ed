import React from 'react';
import { useInput } from './Hook';

export default function AddColorFormCH({ onNewColor = (f) => f }) {
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#ffffff');

    const submit = (event) => {
        event.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type='text'
                placeholder='Color Title...'
                required
            />
            <input
                {...colorProps}
                type='color'
                // placeholder='Color hex...'
                required
            />
            <button>ADD</button>
        </form>
    );
}
