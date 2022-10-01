import "./style.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfilePicture from "../../../components/ProfilePicture";
import Carousel from "../../../components/Carousel";
import api, { apiUrl } from "../../../services/api";
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
                onClick={() =>
                  navigate(`/buffet/${params.buffetId}/party/invoice`)
                }
                className="buffetProfile-budgetDiv"
              >
                <label>Montar minha festa</label>
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
          <div className="buffetProfile-addressDiv">
            <h1>Galeria de Fotos</h1>
          </div>
          {buffetImages.length > 0 ? (
            <Carousel images={buffetImages} />
          ) : (
            <p>Este Buffet ainda não possui fotos</p>
          )}
          <div className="buffetProfile-descriptionFrame">
            <label className="buffetProfile-aboutCompanyTitle">Sobre o buffet {buffetProfile?.profile.name}</label>
            <label className="buffetProfile-aboutCompanyDescription">
              dsaidfhufasfd
              {/* <br></br> */}
              {buffetProfile?.profile.description}
              {buffetProfile?.profile.maxCapacity}
            </label>
          </div>

        </div>
      </div>
    </>
  );
};

export default BuffetProfile;
