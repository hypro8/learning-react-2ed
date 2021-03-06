import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// switch among Apps JS
import AppState from "./AppState";
// import AppStateAll from "./AppStateAll";
// import App from "./App";

// for using of Context:
import colorData from "./Data/ColorData.json";

import { createContext } from "react";

export const ColorContext = createContext();

ReactDOM.render(
    <React.StrictMode>
        <ColorContext.Provider value={{ colorData }}>
            {/* <App /> */}
            <AppState />
            {/* <AppStateAll /> */}
        </ColorContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
