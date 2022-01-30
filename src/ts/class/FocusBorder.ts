import { 
    OptionsBorderProps,
    TypeInputProps
} from "../types";

class FocusBorder {
    private readonly _elements: NodeListOf<HTMLElement>;
    private _optionsBorder: OptionsBorderProps;
    private TIMERDELAYTRANSITION: number = 250;
    
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
        this.elements.forEach(secureAreaInput => {
            const areaInput = secureAreaInput.children[0] as HTMLElement;
            const messageError = secureAreaInput.children[1] as HTMLDivElement;
            const input = areaInput.children[0] as HTMLInputElement;
            const iconError = areaInput.children[1] as HTMLDivElement;
            const typeInput = input.getAttribute("id") as TypeInputProps;

            setTimeout(() => {
                areaInput.style.transition = "border 500ms";
                iconError.style.transition = "opacity 500ms";
            }, this.TIMERDELAYTRANSITION);

            const validateInput = () => {
                if(!input.value) {
                    iconError.style.opacity = "1";

                    switch(typeInput) {
                        case "first-name":
                            messageError.innerText = "First Name cannot be empty";
                            
                        break;
                        case "last-name":
                            messageError.innerText = "Last Name cannot be empty";
                                
                            break;
                        case "email":
                            messageError.innerText = "Email cannot be empty";

                            break;
                        case "password":
                            messageError.innerText = "Password cannot be empty";

                            break;
                        default:
                    }

                    input.style.color = "#FF7979";

                    areaInput.style.border = `${width} ${style} #FF7979`;
                } else if (typeInput === "email") {
                    const isPassed = this.validateEmail(input);

                    if(!isPassed) {
                        iconError.style.opacity = "1";
                        messageError.innerText = "Looks like this is not an email";
                        input.style.color = "#FF7979";
                        areaInput.style.border = `${width} ${style} #FF7979`;
                    } else {
                        iconError.style.opacity = "";
                        messageError.innerText = "";
                        input.style.color = "";
                        areaInput.style.border = ""
                    }
                } else {
                    iconError.style.opacity = "";

                    input.style.color = "";

                    messageError.innerText = "";

                    areaInput.style.border = "";
                }
            }

            areaInput.style.transition = "border 500ms";

            const { width, style, color } = this.optionsBorder;

            input.addEventListener("focus", () => {
                areaInput.style.border = `${width} ${style} ${color}`;

                input.addEventListener("change", validateInput);
            }, true);

            input.addEventListener("blur", () => {
                validateInput();
            }, true);
        })
    }

    private validateEmail(inputEmail: HTMLInputElement): boolean {
        const value = inputEmail.value;
        const arrayValue = value.split("");
        const isAtSignExists = arrayValue.includes("@");
        const pointComValue = value.substring(value.length - 4, value.length);
        const isPointComExists = pointComValue === ".com";

        return isAtSignExists && isPointComExists;
    }
}

export default FocusBorder;