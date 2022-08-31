import "./style.css";

// Components
import ProfilePicture from "../../../components/ProfilePicture";
import Carousel from "../../../components/Carousel";

//icons
import { FaMoneyBillWave } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import FeedbackCard from "../../../components/FeedbackCard";

//images

export const BuffetProfile = () => {
  return (
    <div className="buffetProfile-mainDiv">
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
        <div className="buffetProfile-addressDiv">
          <h1>Endereço</h1>
          <label>Rua Exemplo, 123</label>
        </div>
        <Carousel />
        <div className="buffetProfile-feedbaackDiv">
          <h1>Quadro de Feedbacks</h1>
          <div className="buffetProfile-divCardsFeedback">

            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuffetProfile;
