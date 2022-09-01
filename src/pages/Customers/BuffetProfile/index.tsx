import React, { InputHTMLAttributes } from "react";
import "./style.css";
//Hooks
import { useState } from "react";

// Components
import ProfilePicture from "../../../components/ProfilePicture";
import Carousel from "../../../components/Carousel";
import Modal from "../../../components/Modal";
import FeedbackCard from "../../../components/FeedbackCard";

//icons
import { FaMoneyBillWave } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import MenuOptions from "../../../components/MenuOptions";

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
            <div className="modal-decorationDiv">
              {/* <MenuOptions /> */}
              <h1>Opções de Decoração</h1>
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
              </div>
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
              </div>
              <div>
                <input type="checkbox" />
                <label>Lorem Ipsum</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Lorem Ipsum</label>
              </div>
            </div>
          </div>
          <div className="modal-rightContent"></div>
        </div>
      </Modal>
    </>
  );
};
export default BuffetProfile;
