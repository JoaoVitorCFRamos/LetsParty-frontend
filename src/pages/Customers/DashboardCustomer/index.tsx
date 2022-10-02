import "./style.css";
import BuffetCard from "../../../components/BuffetCard";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../../../components/Dropdown";
import Loading from "../../../components/Loading";
import { useDebounce } from "../../../hooks/useDebounce";

type BuffetList = {
  id: string;
  profile: {
    name: string;
    city: string;
    neighborhood: string;
    thumbnail: string | null;
  };
};

interface IQuery {
  name?: string;
  city?: string;
  neighborhood?: string;
  numberOfGuests?: number;
  minPrice?: number;
  maxPrice?: number | null;
}

const DashboardCustomer = () => {
  const [buffets, setBuffets] = useState<BuffetList[]>();
  const [query, setQuery] = useState<IQuery>({});
  const debouncedSearchValue = useDebounce<IQuery>(query, 500);
  const [loading, setLoading] = useState<boolean>(true);
  const [citiesFilter, setCitiesFilter] = useState<any[]>();
  const [neighborhoodsFilter, setNeighborhoodsFilter] = useState<any[]>();
  const [disableNeighborhood, setDisableNeighborhood] = useState<boolean>(true);

  const handleChangeCityFilter = (city: string) => {
    setQuery({ ...query, city });

    if (query.city !== null && query.city !== "") {
      api
        .get("/address/companies/neighborhoods", {
          params: { state: "SP", city: "São Paulo" },
        })
        .then((response) => {
          setNeighborhoodsFilter(response.data);
          setDisableNeighborhood(false);
        });
    }
  };

  const handleChangeNeighborhoodFilter = (neighborhood: string) => {
    setQuery({ ...query, neighborhood });
  };

  const handleChangeNumberOfGuestsFilter = (numberOfGuests: number) => {
    setQuery({ ...query, numberOfGuests });
  };

  const handleChangePriceFilter = (
    minPrice: number,
    maxPrice: number | null
  ) => {
    setQuery({ ...query, minPrice, maxPrice });
  };

  useEffect(() => {
    api.get("/address/companies/cities?state=SP").then((response) => {
      setCitiesFilter(response.data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    api
      .get<BuffetList[]>("/companies", { params: debouncedSearchValue })
      .then((response) => {
        setBuffets(response.data);
      });

    setLoading(false);
  }, [debouncedSearchValue]);

  return (
    <>
      <div className="dashboardCustomer-divHigher">
        <label>Encontre o Buffet ideal para a sua festa</label>
      </div>
      <div className="dashboardCustomer-divBottom">
        <div className="dashboardCustomer-cardsDiv">
          {loading ? (
            <Loading />
          ) : buffets?.length === 0 ? (
            <h1 className="dashboardCustomer-noResultsFound">Nenhum resultado encontrado</h1>
          ) : (
            buffets?.map((buffet, index) => (
              <BuffetCard
                key={index}
                id={buffet.id}
                name={buffet.profile.name}
                thumbnail={buffet.profile.thumbnail}
                neighborhood={buffet.profile.neighborhood}
                city={buffet.profile.city}
              />
            ))
          )}
        </div>
        {/* <div className="dashboardCustomer-searchByName">
          <input type="text" placeholder="Procurar por nome" />
          <div>
            <FaSearch />
          </div>
        </div> */}
        <div className="dashboardCustomer-filterDiv">
          <label className="dashboardCustomer-filterTitle">
            {" "}
            Adicione um filtro à sua pesquisa
          </label>
          <Dropdown title="Capacidade máxima para convidados">
            <div className="dashboardCustomer-dropdownChildren-mainDiv">
              <label>
                <input
                  name="numberOfGuests"
                  type="radio"
                  onChange={(e) => handleChangeNumberOfGuestsFilter(50)}
                />
                <label>até 50 convidados</label>
              </label>
              <label>
                <input
                  name="numberOfGuests"
                  type="radio"
                  onChange={(e) => handleChangeNumberOfGuestsFilter(100)}
                />
                <label>até 100 convidados</label>
              </label>
              <label>
                <input
                  name="numberOfGuests"
                  type="radio"
                  onChange={(e) => handleChangeNumberOfGuestsFilter(150)}
                />
                <label>até 150 convidados</label>
              </label>
              <label>
                <input
                  name="numberOfGuests"
                  type="radio"
                  onChange={(e) => handleChangeNumberOfGuestsFilter(200)}
                />
                <label>mais de 200 convidados</label>
              </label>
            </div>
          </Dropdown>
          <Dropdown title="Cidade">
            <div className="dashboardCustomer-dropdownChildren-mainDiv">
              <select
                defaultValue=""
                onChange={(e) => handleChangeCityFilter(e.target.value)}
              >
                <option value="" disabled hidden>
                  Selecione uma cidade
                </option>
                {citiesFilter?.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </Dropdown>
          <Dropdown title="Bairro">
            <div className="dashboardCustomer-dropdownChildren-mainDiv">
              <select
                defaultValue=""
                value={query.neighborhood}
                disabled={disableNeighborhood}
                onChange={(e) => handleChangeNeighborhoodFilter(e.target.value)}
              >
                <option value="" disabled hidden>
                  Selecione um bairro
                </option>
                {neighborhoodsFilter?.map((neighborhood, index) => (
                  <option key={index} value={neighborhood}>
                    {neighborhood}
                  </option>
                ))}
              </select>
            </div>
          </Dropdown>
          <Dropdown title="A partir de">
            <div className="dashboardCustomer-dropdownChildren-mainDiv">
              <label>
                <input
                  name="price"
                  type="radio"
                  onChange={(e) => handleChangePriceFilter(3000, 4000)}
                />
                <label>R$ 3.000,00 - R$ 4.000,00</label>
              </label>
              <label>
                <input
                  name="price"
                  type="radio"
                  onChange={(e) => handleChangePriceFilter(4000, 6000)}
                />
                <label>R$ 4.000,00 - R$ 6.000,00</label>
              </label>
              <label>
                <input
                  name="price"
                  type="radio"
                  onChange={(e) => handleChangePriceFilter(5000, 8000)}
                />
                <label>R$ 6.000,00 - R$ 8.000,00</label>
              </label>
              <label>
                <input
                  name="price"
                  type="radio"
                  onChange={(e) => handleChangePriceFilter(10000, null)}
                />
                <label>Maior que R$ 10.000,00</label>
              </label>
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default DashboardCustomer;
