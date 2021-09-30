import React from "react";
import { useColors } from "./ColorProvider";
import { useInput } from "../Forms/Hook";

export default function AddColorFormContext() {
    // props
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = (e) => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };
    //return
    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="enter color title..."
                required
            />
            <input type="color" {...colorProps} required />
            <button>ADD</button>
        </form>
    );
}
