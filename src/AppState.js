import { useState } from 'react';
import './App.css';

import colorData from './ColorList/ColorData.json';
import ColorList from './ColorList/ColorList';

function AppState() {
    const [colors, setColors] = useState(colorData);
    return (
        <ColorList
            colors={colors}
            onRemoveColor={(id) => {
                const newColors = colors.filter((color) => color.id !== id);
                setColors(newColors);
            }}
            onRateColor={(id, rating) => {
                const newColors = colors.map(
                    (color) => (color.id === id ? { ...color, rating } : color)
                    // VS: color.id === id ? (color.rating = rating) : color
                );
                setColors(newColors);
            }}
        />
    );
}

export default AppState;
