import "./style.css"
import react, { FC } from "react";

interface CustomCheckBox {
    title: string;
}

export const CustomCheckBox: react.FC<CustomCheckBox> = (props) => {
    const { title } = props;
    return (
        <div className="customCheckbox-mainDiv">
            <label className="customCheckbox-container">{title}
                <input type="checkbox" />
                <span className="customCheckbox-checkmark"></span>
            </label>

        </div >
    )
}

export default CustomCheckBox;