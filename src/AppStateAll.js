import { useState } from "react";
import "./App.css";

import colorData from "./Data/ColorData.json";
import ColorList from "./AllComps";
import AddColorFormCH from "./Forms/CustomHook";
import { v4 } from "uuid";

export default function AppStateAll() {
    const [colors, setColors] = useState(colorData);

    return (
        <>
            <AddColorFormCH
                onNewColor={(title, color) => {
                    const newColors = [
                        ...colors,
                        { id: v4(), rating: 0, title, color },
                    ];
                    setColors(newColors);
                }}
            />
            <ColorList
                colors={colors}
                onRemoveColor={(id) => {
                    const newColors = colors.filter((color) => color.id !== id);
                    setColors(newColors);
                }}
                onRateColor={(id, rating) => {
                    const newColors = colors.map(
                        (color) =>
                            color.id === id ? { ...color, rating } : color
                        // color.id === id ? (color.rating = rating) : color
                    );
                    setColors(newColors);
                }}
            />
        </>
    );
}
