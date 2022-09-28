import react, { FC } from "react";
import "./style.css"

interface BlueButton {
    title: string;
    onClick?: () => any;
}

export const BlueButton: react.FC<BlueButton> = (props) => {
    return (
        <button onClick={props.onClick} className="blueButton-button">{props.title}</button>
    )
}
export default BlueButton;