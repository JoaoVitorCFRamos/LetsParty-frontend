import "./style.css";
import BuffetCard from "../../../components/BuffetCard";
import { useEffect, useState } from "react";
import api from "../../../services/api";

interface IFavoriteBuffet {
  id: string;
  company: {
    id: string;
    profile: {
      name: string;
      city: string;
      neighborhood: string;
      thumbnail: string | null;
    };
  };
}

const Favorites = () => {
  const [buffets, setBuffets] = useState<IFavoriteBuffet[]>();

  useEffect(() => {
    api.get("/customers/favorites").then((response) => {
      setBuffets(response.data);
    });
  }, []);

  return (
    <>
      <div className="favorites-divHigher">
        <label>Seus Buffets favoritos</label>
      </div>
      {buffets && buffets.length > 0 ? (
        <div className="favorites-divBottom">
          {buffets?.map((buffet, index) => (
            <BuffetCard
              key={index}
              id={buffet.company.id}
              name={buffet.company.profile.name}
              city={buffet.company.profile.city}
              thumbnail={buffet.company.profile.thumbnail}
              neighborhood={buffet.company.profile.neighborhood}
            />
          ))}
        </div>
      ) : (
        <p className="favorites-notFound">Você ainda não adicionou nenhum Buffet como favorito</p>
      )}
    </>
  );
};

export default Favorites;
