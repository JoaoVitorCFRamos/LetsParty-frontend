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
      thumbnail?: string;
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
      <div className="favorites-divBottom">
        {buffets?.map((buffet, index) => (
          <BuffetCard
            key={index}
            id={buffet.company.id}
            name={buffet.company.profile.name}
            city={buffet.company.profile.city}
            neighborhood={buffet.company.profile.neighborhood}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
