import React from "react";
import ColorContext from "./ColorContext";
import { useColors } from "./ColorProvider";

export default function ColorListContext() {
    const { colors } = useColors();

    if (!colors.length) return <div>No colors Listed. (Add a color.)</div>;
    return (
        <div>
            {colors.map((color) => (
                <ColorContext key={color.id} {...color} />
            ))}
        </div>
    );
}
