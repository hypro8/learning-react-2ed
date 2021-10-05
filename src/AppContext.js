import "./App.css";
import ColorListContext from "./Context/ColorListContext";

// use Form to add new color
import AddColorFormContext from "./Context/AddColorFormContext";
import CheckBoxUseEffect from "./UseEffect/CheckBoxUseEffect";
// import AddColorFormCH from "./Forms/CustomHook";

export default function AppContext() {
    return (
        <>
            <ColorListContext />
            <AddColorFormContext />
            <CheckBoxUseEffect />
        </>
    );
}
