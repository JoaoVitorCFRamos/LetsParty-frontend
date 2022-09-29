import "./style.css"
import react, { FC, useState, useEffect, useRef } from "react"
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';


interface Dropdown {
    title: string;
    children?: React.ReactNode;

}


export const Dropdown: react.FC<Dropdown> = (props) => {

    const { title, children } = props;

    const DropdownRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const onClick = () => setIsOpen(!isOpen)

    return (
        <>
            {isOpen == false
                ? <div className="container">
                    <div className="menuContainer">
                        <div onClick={onClick} className="menuButton ">
                            <span className="dropdown-title">{title}</span>
                            <RiArrowDownSLine size={23} />
                        </div>

                        <nav ref={DropdownRef} className={`menu ${isOpen ? "open" : "close"}`}>
                        </nav>
                    </div>
                </div>
                : <div className="container">
                    <div className="menuContainer">
                        <div onClick={onClick} className={`menuButton ${isOpen ? " open" : "close"}`}>
                            <span className="dropdown-title">{title}</span>
                            <RiArrowUpSLine size={23} />
                        </div>

                        <nav ref={DropdownRef} className={`menu ${isOpen ? "open" : "close"}`}>
                            {children}
                        </nav>
                    </div>
                </div>
            }

        </>
    )
}

export default Dropdown;

//https://www.youtube.com/watch?v=GDx292kYBNc&ab_channel=OmniLabs