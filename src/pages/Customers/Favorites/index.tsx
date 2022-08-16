//Components
import "./style.css";
import SideBar from "../../../components/SideBar";
import BuffetCard from "../../../components/BuffetCard";

export const Favorites = () => {
  return (
    <div className="favorites-mainDiv">
      <div className="favorites-sideBar">
        <SideBar></SideBar>
      </div>
      <div className="favorites-content">
        <div className="favorites-divHigher">
          <label>Seus Buffets favoritos</label>
        </div>
        <div className="favorites-divBottom">
          <BuffetCard />
          <BuffetCard />
          <BuffetCard />
          <BuffetCard />
          <BuffetCard />
          <BuffetCard />


        </div>
      </div>
    </div>
  );
};

export default Favorites;
