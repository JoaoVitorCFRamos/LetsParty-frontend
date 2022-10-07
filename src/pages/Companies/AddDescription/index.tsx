<<<<<<< HEAD
import BlueButton from "../../../components/BlueButton";
import "./style.css"

export const AddDescription = () => {
    return (
        <div className="addDescription-mainDiv">
            <div className="addDescription-mainContent">
                <label>Informe uma descrição para seu buffet</label>
                <textarea className="addDescription-textarea" />
            </div>
            <div className="addDescription-buttonDiv">
                <BlueButton onClick={() => { }} title="Cadastrar" />
            </div>
        </div>
    )
}

export default AddDescription;
=======
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BlueButton from "../../../components/BlueButton";
import api from "../../../services/api";
import "./style.css";

const AddDescription = () => {
  const [description, setDescription] = useState<string>();

  const handleSubmit = () => {
    if (!description) {
      toast.error("Por favor, informe uma descrição para o seu buffet");
    }

    if (description) {
      api
        .put("/companies/me")
        .then((response) => {
          if (response.status === 200) {
            toast.success("Descrição atualizada com sucesso");
          }
        })
        .catch((error) => {
          toast.error("Não foi possível alterar a descrição");
        });
    }
  };

  useEffect(() => {
    api.get("/companies/me").then((response) => {
      setDescription(response.data.profile.description);
    });
  }, []);

  return (
    <div className="addDescription-mainDiv">
      <div className="addDescription-mainContent">
        <label>Informe uma descrição para o seu Buffet</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="addDescription-textarea"
        />
      </div>
      <div className="addDescription-buttonDiv">
        <BlueButton onClick={() => handleSubmit()} title="Atualizar" />
      </div>
    </div>
  );
};

export default AddDescription;
>>>>>>> presentation
