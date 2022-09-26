import "./style.css";
import BuffetCard from "../../../components/BuffetCard";
import { useEffect, useState } from "react";
import api from "../../../services/api";

type BuffetList = {
  id: string;
  profile: {
    name: string;
    city: string;
    neighborhood: string;
    thumbnail: string | null;
  };
};

const DashboardCustomer = () => {
  const [buffets, setBuffets] = useState<BuffetList[]>();

  useEffect(() => {
    api.get<BuffetList[]>("/companies").then((response) => {
      setBuffets(response.data);
    });
  }, []);

  return (
    <>
      <div className="dashboardCustomer-divHigher">
        <label>Encontre o Buffet ideal para a sua festa</label>
      </div>
      <div className="dashboardCustomer-divBottom">
        {buffets?.map((buffet, index) => (
          <BuffetCard
            key={index}
            id={buffet.id}
            name={buffet.profile.name}
            neighborhood={buffet.profile.neighborhood}
            city={buffet.profile.city}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardCustomer;
