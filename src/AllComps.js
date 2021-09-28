// put all components of the ColorRating system into one file:
// Then use AppStateAll.js as parent handling state.

import React from 'react';
import { FaStar, FaTrash } from 'react-icons/fa';

export default function ColorList({
    colors = [],
    onRemoveColor = (f) => f,
    onRateColor = (f) => f,
}) {
    if (!colors.length) return <div>No colors Listed</div>;
    return (
        <div>
            {colors.map((color) => (
                <Color
                    key={color.id}
                    {...color}
                    onRemove={onRemoveColor}
                    onRate={onRateColor}
                />
            ))}
        </div>
    );
}

function Color({
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
            <StarRating selectedStar={rating} onRate={(rr) => onRate(id, rr)} />
            {/* add remove button: */}
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
        </section>
    );
}

const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

function StarRating({ totalStars = 5, selectedStar = 0, onRate = (f) => f }) {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStar > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStar} of {totalStars} stars
            </p>
        </>
    );
}
