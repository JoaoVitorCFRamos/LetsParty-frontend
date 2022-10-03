import { useState } from "react";
import { toast } from "react-toastify";
import BlueButton from "../../../components/BlueButton";
import api from "../../../services/api";
import "./style.css";

const AddPricing = () => {
  const [numberOfGuests, setNumberOfGuests] = useState<number | "">();
  const [price, setPrice] = useState<number | "">();

  const handleSubmit = () => {
    if (!numberOfGuests) {
      toast.error("Por favor, informe o número de convidados");
    }

    if (!price) {
      toast.error("Por favor, informe o preço");
    }

    if (numberOfGuests && price) {
      api
        .post("/companies/pricings", {
          numberOfGuests: numberOfGuests,
          price: price,
        })
        .then((response) => {
          if (response.status === 201) {
            setNumberOfGuests("");
            setPrice("");
            toast.success("Precificação criada com sucesso");
          }
        })
        .catch((error) => {
          toast.error(
            error.response.data.message ||
              "Não foi possível cadastrar uma precificação"
          );
        });
    }
  };

  return (
    <div className="addPricing-mainDiv">
      <div className="addPricing-mainContent">
        <label>Informe o número de convidados e o preço do serviço</label>
        <input
          type="number"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(Number(e.target.value))}
          placeholder="Número de convidados"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Preço"
        />
      </div>
      <div className="addPrincing-buttonDiv">
        <BlueButton onClick={() => handleSubmit()} title="Cadastrar" />
      </div>
    </div>
  );
};

export default AddPricing;
