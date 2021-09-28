// this is a pure component: A pure component is a function component that does not
// contain state and will render the same user interface given the same props.
// We made this component a pure component because the state for color ratings are
// stored in the colors array at the root of the component tree.

import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({
    totalStars = 5,
    selectedStar = 0,
    onRate = (f) => f,
}) {
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
