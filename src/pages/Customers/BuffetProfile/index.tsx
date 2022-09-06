import React, { InputHTMLAttributes } from "react";
import "./style.css";
//Hooks
import { useState } from "react";

// Components
import ProfilePicture from "../../../components/ProfilePicture";
import Carousel from "../../../components/Carousel";
import Modal from "../../../components/Modal";
import FeedbackCard from "../../../components/FeedbackCard";
import MenuOptions from "../../../components/MenuOptions";

//icons
import { FaMoneyBillWave } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdOutlineCake } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import { BiDish } from "react-icons/bi";

export const BuffetProfile: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
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
              <div
                onClick={() => setIsModalVisible(true)}
                className="buffetProfile-budgetDiv"
              >
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

      <Modal
        onClose={() => setIsModalVisible(false)}
        isModalVisible={isModalVisible}
      >
        <div className="modal-content">
          <div className="modal-leftContent">
            <div className="modal-dateDiv">
              <BsCalendar4Week size={23} />
              <h2>Data</h2>
              <input type="date" />
            </div>
            <div className="modal-noteDiv">
              <h2>Faça uma observação:</h2>
              <textarea></textarea>
            </div>
            <MenuOptions
              title="Opções de Decoração"
              icon={<MdOutlineCake size={28} />}
            />
          </div>
          <div className="modal-rightContent">
            <MenuOptions
              title="Opções de Bebidas"
              icon={<FaWineGlassAlt size={23} />}
            />
            <MenuOptions
              title="Opções de Alimentação"
              icon={<BiDish size={28} />}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default BuffetProfile;
