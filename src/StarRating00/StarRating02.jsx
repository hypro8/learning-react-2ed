import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// users can select Star by clicking

const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating02({ totalStars = 5 }) {
    const [selectStars, setSelectStars] = useState(0);
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectStars > i}
                    onSelect={() => setSelectStars(i + 1)}
                />
            ))}
            <p>
                {selectStars} of {totalStars} stars
            </p>
        </>
    );
}
