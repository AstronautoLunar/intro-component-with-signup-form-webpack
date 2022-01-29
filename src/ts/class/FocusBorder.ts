import { OptionsBorderProps } from "../types";

class FocusBorder {
    private readonly _elements: NodeListOf<HTMLElement>;
    private _optionsBorder: OptionsBorderProps;
    
    constructor(
        elements: NodeListOf<HTMLElement>, 
        optionsBorder: OptionsBorderProps = { 
            width: "1px", 
            style: "solid", 
            color: "#000000"
        }
    ) {
        this._elements = elements;
        this._optionsBorder = optionsBorder;
    }

    public get elements(): NodeListOf<HTMLElement> {
        return this._elements;
    }

    public get optionsBorder(): OptionsBorderProps {
        return this._optionsBorder;
    }

    public render() {
        this.elements.forEach(item => {
            item.style.transition = "border 500ms";

            const { width, style, color } = this.optionsBorder;

            item.addEventListener("focus", () => {
                item.style.border = `${width} ${style} ${color}`;
            }, true);

            item.addEventListener("blur", () => {
                item.style.border = "";
            }, true);
        })
    }
}

export default FocusBorder;