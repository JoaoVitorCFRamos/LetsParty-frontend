import "./style.css";

// Components
import SideBar from "../../../components/SideBar";
import ProfilePicture from "../../../components/ProfilePicture";

//icons
import { FaMoneyBillWave } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

export const BuffetProfile = () => {
  return (
    <div className="buffetProfile-mainDiv">
      <div className="buffetProfile-sideBar">
        <SideBar email="asdsad" />
      </div>
      <div className="buffetProfile-content">
        <div className="buffetProfile-topContent">
          <div className="buffetProfile-buffetsInfos">
            <ProfilePicture />
            <div className="buffetProfile-nameLocalDiv">
              <h1>Buffet Alegria</h1>
              <label>Zona Norte/SP</label>
            </div>
          </div>
          <div className="buffetProfile-budgetFavDiv">
            <div className="buffetProfile-budgetDiv">
              <label>Orçar</label>
              <FaMoneyBillWave size={25} color="#0FA958" />
            </div>
            <div className="buffetProfile-favoriteDiv">
              <label>Favoritar</label>
              <MdFavorite color="#F21E1E" size={23} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuffetProfile;
