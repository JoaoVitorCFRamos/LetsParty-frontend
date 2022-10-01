import React, { ChangeEvent } from "react";
import "./style.css";

interface ICustomCheckBox {
  title: string;
  price: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckBox = (props: ICustomCheckBox) => {
  const { title, price } = props;

  return (
    <div className="customCheckbox-mainDiv">
      <label className="customCheckbox-container">
        {`${title} (+ ${price})`}
        <input
          type="checkbox"
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
        <span className="customCheckbox-checkmark"></span>
      </label>
    </div>
  );
};

export default CustomCheckBox;
