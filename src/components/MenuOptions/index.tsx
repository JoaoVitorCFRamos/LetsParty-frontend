import react from "react";
import "./style.css";

interface MenuProps {
  title: string;
  checkOption?: string;
  icon?: any;
  children?: React.ReactNode;
}

export const MenuOptions: React.FC<MenuProps> = (props) => {
  const { title, checkOption, children, icon } = props;

  return (
    <div className="modal-decorationDiv">
      <div className="menuOptions-headerDiv">
        <h1>{title}</h1>
        {icon}
      </div>
      <div className="modal-checksDiv">
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Lorem Ipsum</label>
        </div>{" "}
      </div>
    </div>
  );
};
export default MenuOptions;
