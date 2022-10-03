import { useState } from "react";
import { toast } from "react-toastify";
import BlueButton from "../../../components/BlueButton";
import api from "../../../services/api";
import "./style.css";

const AddOptionalServices = () => {
  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>();

  const handleSubmit = () => {
    if (!name) {
      toast.error("Por favor, informe o nome do serviço");
    }

    if (!price) {
      toast.error("Por favor, informe o preço do serviço");
    }

    if (name && price) {
      api
        .post("/companies/services", {
          name: name,
          price: price,
          category: "OTHER",
        })
        .then((response) => {
          if (response.status === 201) {
            toast.success("Serviço criado com sucesso!");
          }
        })
        .catch(() => {
          toast.error("Não foi possível cadastrar o serviço");
        });
    }
  };

  return (
    <div className="addOptionalServices-mainDiv">
      <div className="addOptionalServices-mainContent">
        <label>Informe o serviço que será prestado e o seu preço</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do serviço opcional"
        />
        <input
          type="number"
          min="1"
          step="any"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Preço"
        />
      </div>
      <div className="addOptionalServices-buttonDiv">
        <BlueButton onClick={() => handleSubmit} title="Cadastrar" />
      </div>
    </div>
  );
};

export default AddOptionalServices;
