import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => (
    <FaStar color={selected ? 'red' : 'grey'} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating01({ totalStar = 5 }) {
    return createArray(totalStar).map((n, i) => <Star key={i} />);
}
