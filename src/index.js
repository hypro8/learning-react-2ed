import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// switch among Apps JS
// import AppState from "./AppState";
// import AppStateAll from "./AppStateAll";
import App from "./App";

// for using of Context.Provider:
import ColorProvider from "./Context/ColorProvider";
import AppContext from "./AppContext";
import AppUseEffect from "./AppUseEffect";

ReactDOM.render(
    <React.StrictMode>
        <ColorProvider>
            <App />
            {/* <AppStateAll /> */}
            {/* <AppState /> */}
            {/* <AppContext /> */}
            <AppUseEffect />
        </ColorProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
