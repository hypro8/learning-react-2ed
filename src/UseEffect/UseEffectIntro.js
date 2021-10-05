import React, { useState, useEffect } from "react";

export default function UseEffectIntro() {
    const [val, set] = useState("");
    const [phrase, setPhrase] = useState("example phrase");

    const createPhrase = () => {
        setPhrase(val);
        set("");
    };

    useEffect(() => {
        console.log(`typing "${val}"`);
    });
    useEffect(() => {
        console.log(`save phrase: "${phrase}"`);
    });

    return (
        <>
            <label>Favourate Phrase</label>
            <input
                value={val}
                placeholder={phrase}
                onChange={(e) => set(e.target.value)}
            />
            <button onClick={createPhrase}>Send</button>
        </>
    );
}

// into App.js
