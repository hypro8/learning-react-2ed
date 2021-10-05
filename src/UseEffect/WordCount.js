import React, { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener("keydown", forceRender);
        return () => {
            window.removeEventListener("keydown", forceRender);
        };
    }, []);
};

export default function WordCount({ children = "" }) {
    useAnyKeyToRender();
    const words = children.split(" ");

    useEffect(() => {
        console.log("Fresh render");
    }, [words]);

    function handleClick(e) {
        e.preventDefault();
        console.log("handle clicks", e);
    }

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>- {words.length} - words</strong>
            </p>
            <a href="http://www.google.co.uk" onClick={handleClick}>
                Google
            </a>
        </>
    );
}
