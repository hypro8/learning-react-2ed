import React from 'react';
import StarRating03 from '../StarRating00/StarRating03.js';
import { FaTrash } from 'react-icons/fa';

export default function Color({
    id,
    title,
    color,
    rating,
    onRemove = (f) => f,
    onRate = (f) => f,
}) {
    return (
        <section>
            <h1>{title}</h1>
            <div style={{ height: 50, background: color }} />
            <StarRating03
                selectedStar={rating}
                onRate={(newRating) => onRate(id, newRating)}
            />
            {/* add remove button: */}
            <button onClick={() => onRemove(id)}>
                {/* <button onClick={() => onRemove(id)}> */}
                <FaTrash />
            </button>
        </section>
    );
}
