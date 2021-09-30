import React from "react";
import StarRating03 from "../StarRating00/StarRating03.js";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider.js";

export default function ColorContext({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <div style={{ height: 50, background: color }} />
            <StarRating03
                selectedStar={rating}
                onRate={(newRating) => rateColor(id, newRating)}
            />
            {/* add remove button: */}
            <button onClick={() => removeColor(id)}>
                {/* <button onClick={() => onRemove(id)}> */}
                <FaTrash />
            </button>
        </section>
    );
}
