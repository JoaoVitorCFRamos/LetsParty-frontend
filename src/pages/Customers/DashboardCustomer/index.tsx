import "./style.css";
import BuffetCard from "../../../components/BuffetCard";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { FaSearch } from 'react-icons/fa'
import Dropdown from "../../../components/Dropdown";
import { X509Certificate } from "crypto";
import { CustomCheckBox } from "../../../components/CustomCheckbox";


//FaSearch
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
      {/* <div className="dashboardCustomer-divMiddle">
        
      </div> */}
      <div className="dashboardCustomer-divBottom">
        <div className="dashboardCustomer-cardsDiv">

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
        <div className="dashboardCustomer-searchByName">
          <input type="text" placeholder="Procurar por nome" />
          <div>
            <FaSearch />
          </div>

        </div>
        <div className="dashboardCustomer-filterDiv">
          <label className="dashboardCustomer-filterTitle"> Adicione um filtro a sua pesquisa</label>
          <Dropdown title="Preço Médio">
            <div className="dashboardCustomer-dropdownChildren-mainDiv">
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </Dropdown>
          <Dropdown title="Preço Médio">
            <div className="dashboardCustomer-dropdownChildren-mainDiv">
              <input type="text" />
            </div>
          </Dropdown>
          <Dropdown title="Preço Médio">
            <div className="dashboardCustomer-dropdownChildren-mainDiv">
              <input type="text" />
            </div>
          </Dropdown>
          <Dropdown title="Preço Médio">
            <div className="dashboardCustomer-dropdownChildren-mainDiv">
              <label>
                <input type="checkbox" />
                <label>valor</label>
              </label>
              <label>
                <input type="checkbox" />
                <label>valor</label>
              </label>
              <label>
                <input type="checkbox" />
                <label>valor</label>
              </label>
              <label>
                <input type="checkbox" />
                <label>valor</label>
              </label>



            </div>
          </Dropdown>
        </div>
      </div>

    </>
  );
};

export default DashboardCustomer;
