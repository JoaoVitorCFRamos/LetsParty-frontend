import "./style.css"
import react, { FC } from "react";

interface CustomCheckBox {
    title: string;
    price?: number;
}

export const CustomCheckBox: react.FC<CustomCheckBox> = (props) => {
    const { title, price } = props;
    return (
        <div className="customCheckbox-mainDiv">
            <label className="customCheckbox-container">{title}<p></p>(valor: R${price})
                <input type="checkbox" />
                <span className="customCheckbox-checkmark"></span>
            </label>

        </div >
    )
}

export default CustomCheckBox;