import "../scss/main.scss";
import { FocusBorder } from "./class";
import { areaInputs } from "./elements";

const actionFocusBorder = new FocusBorder(areaInputs, {
    width: "1px",
    style: "solid",
    color: "#3e3c49"
});

actionFocusBorder.render();