import React, { useState, useEffect } from "react";

export default function UseEffectDependencyArray() {
    const [val, set] = useState("");
    const [phrase, setPhrase] = useState("Phrase example");

    const createPhrase = () => {
        setPhrase({ val });
        set("");
    };

    useEffect(() => {
        console.log(`typing: "${val}"`);
    }, [val]);

    useEffect(() => {
        console.log(`saved phrase: "${phrase}"`);
    }, [phrase]);

    useEffect(() => {
        console.log("only once after inital render");
    }, []);

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
