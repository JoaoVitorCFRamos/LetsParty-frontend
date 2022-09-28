import react, { useState, FC } from "react";
import "./style.css"

interface CircleComponent {
    children: React.ReactNode;
    title: string;
}

export const CircleComponent: react.FC<CircleComponent> = (props) => {
    const { children, title } = props;

    return (
        <div className="cicleComponent-mainDiv">
            {children}
            <label className="circleComponent-label"> {title}</label>
        </div>
    )
};

export default CircleComponent