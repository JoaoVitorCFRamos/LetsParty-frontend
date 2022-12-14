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
  isThumbnail: boolean;
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
    setBuffetImages([]);

    api
      .get<IBuffetProfile>(`/companies/${params.buffetId}`)
      .then((response) => {
        setBuffetProfile(response.data);
        response.data.profile.images.forEach((image) => {
          if (!image.isThumbnail) {
            setBuffetImages((images) => [
              ...images,
              {
                url: `${apiUrl}/companies/images/${image.url}`,
                isThumbnail: image.isThumbnail,
              },
            ]);
          }
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
              {buffetProfile && <ProfilePicture companyId={buffetProfile.id} />}
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
            <h1>Endere??o</h1>
            <label>{buffetProfile?.profile.addressLine}</label>
          </div>
          <div className="buffetProfile-addressDiv">
            <h1>Galeria de Fotos</h1>
          </div>
          {buffetImages.length > 0 ? (
            <Carousel images={buffetImages} />
          ) : (
            <p>Este Buffet ainda n??o possui fotos</p>
          )}

          <div className="buffetProfile-descriptionFrame">
            {buffetProfile && buffetProfile.profile.description !== null ? (
              <>
                <label className="buffetProfile-aboutCompanyTitle">
                  Sobre o Buffet
                </label>
                <label className="buffetProfile-aboutCompanyDescription">
                  {buffetProfile?.profile.description}
                </label>
                <label className="buffetProfile-aboutCompanyTitle">
                  Capacidade m??xima suportada no local
                </label>
                <label className="buffetProfile-aboutCompanyDescription">
                  M??ximo de {buffetProfile?.profile.maxCapacity} convidados
                </label>
              </>
            ) : (
              <>
                <label className="buffetProfile-aboutCompanyTitle">
                  Sobre o Buffet
                </label>
                <label className="buffetProfile-aboutCompanyDescription">
                  O Buffet ainda n??o cadastrou uma descri????o.
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuffetProfile;
