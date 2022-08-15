//Components
import "./style.css";
import SideBar from "../../../components/SideBar";

export const Favorites = () => {
  return (
    <div className="favorites-mainDiv">
      <div className="favorites-sideBar">
        <SideBar></SideBar>
      </div>
      <div className="favorites-content">
        <h1>Teste</h1>
      </div>
    </div>
  );
};

export default Favorites;
