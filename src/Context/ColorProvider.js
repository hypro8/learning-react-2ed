import React, { createContext, useState, useContext } from "react";
import colorData from "../Data/ColorData.json";
import { v4 } from "uuid";

const ColorContext = createContext();

// Wrapped all of the functionality necessary to render and work with
// stateful colors in a single JavaScript file. Context is contained
// to this module yet exposed through a hook.
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) =>
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color,
            },
        ]);
    const rateColor = (id, rating) =>
        setColors(
            colors.map((color) =>
                color.id === id ? { ...color, rating } : color
            )
        );

    const removeColor = (id) =>
        setColors(colors.filter((color) => color.id !== id));
    return (
        <ColorContext.Provider
            value={{ colors, addColor, removeColor, rateColor }}
        >
            {children}
        </ColorContext.Provider>
    );
}
