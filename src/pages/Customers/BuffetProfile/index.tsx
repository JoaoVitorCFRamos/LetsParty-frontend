import React, { useEffect } from "react";
import "./style.css";
//Hooks
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import ProfilePicture from "../../../components/ProfilePicture";
import Carousel from "../../../components/Carousel";
import api, { apiUrl } from "../../../services/api";
import Modal from "../../../components/Modal";
import MenuOptions from "../../../components/MenuOptions";

//icons
import { FaMoneyBillWave } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";


export interface IBuffetProfile {
  id: string;
  profile: {
    name: string;
    description: null;
    maxCapacity: number;
    city: string;
    neighborhood: string;
    addressLine: string;
    thumbnail: string;
    images: IBuffetImage[];
  };
}

export interface IBuffetImage {
  url: string;
}

const BuffetProfile = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [buffetProfile, setBuffetProfile] = useState<IBuffetProfile>();
  const [buffetImages, setBuffetImages] = useState<IBuffetImage[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleClickFavorite = () => {
    api.put(`/customers/favorites/${params.buffetId}`).then((response) => {
      setIsFavorite(response.data);
    });
  };

  useEffect(() => {
    api
      .get<IBuffetProfile>(`/companies/${params.buffetId}`)
      .then((response) => {
        setBuffetProfile(response.data);
        response.data.profile.images.forEach((image) => {
          setBuffetImages((images) => [
            ...images,
            { url: `${apiUrl}/companies/images/${image.url}` },
          ]);
        });
      });
  }, [params.buffetId]);

  useEffect(() => {
    api.get(`/customers/favorites/${params.buffetId}`).then((response) => {
      setIsFavorite(response.data);
    });
  }, [params.buffetId]);

  return (
    <>
      <div className="buffetProfile-mainDiv">
        <div className="buffetProfile-content">
          <div className="buffetProfile-topContent">
            <div className="buffetProfile-buffetsInfos">
              <ProfilePicture />
              <div className="buffetProfile-nameLocalDiv">
                <h1>{buffetProfile?.profile.name}</h1>
                <label>{`${buffetProfile?.profile.neighborhood} - ${buffetProfile?.profile.city}`}</label>
              </div>
            </div>
            <div className="buffetProfile-budgetFavDiv">
              <div
                // onClick={() => setIsModalVisible(true)}
                onClick={() => navigate('/partyInformations')}
                className="buffetProfile-budgetDiv"
              >
                <label>Orçar</label>
                <FaMoneyBillWave size={25} color="#0FA958" />
              </div>
              {isFavorite ? (
                <div
                  onClick={handleClickFavorite}
                  className="buffetProfile-favoritedDiv"
                >
                  <label>Favorito</label>
                  <MdFavorite color="white" size={23} />{" "}
                </div>
              ) : (
                <div
                  onClick={handleClickFavorite}
                  className="buffetProfile-favoriteDiv"
                >
                  <label>Favoritar</label>
                  <MdFavorite color="#F21E1E" size={23} />{" "}
                </div>
              )}
            </div>
          </div>
          <div className="buffetProfile-addressDiv">
            <h1>Endereço</h1>
            <label>{buffetProfile?.profile.addressLine}</label>
          </div>
          {buffetImages.length > 0 ? (
            <Carousel images={buffetImages} />
          ) : (
            <p>Este Buffet ainda não possui fotos</p>
          )}

          {buffetProfile?.profile.description}
          {buffetProfile?.profile.maxCapacity}
        </div>
      </div>

      {/* <Modal
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
      </Modal> */}
    </>
  );
};

export default BuffetProfile;
