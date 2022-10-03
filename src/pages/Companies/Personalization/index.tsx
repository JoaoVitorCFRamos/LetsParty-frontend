import "./style.css";
import BlueButton from "../../../components/BlueButton";
import { useNavigate } from "react-router-dom";

const Personalization = () => {
  const navigate = useNavigate();

  return (
    <div className="personification-mainDiv">
      <div className="personification-contentsDiv">
        <label>
          Clique aqui para adicionar um Serviço Opcional em seu Buffet
        </label>
        <div>
          <BlueButton
            onClick={() => navigate("/addOptionalService")}
            title="Serviços Opcionais"
          />
        </div>
      </div>
      <div className="personification-contentsDiv">
        <label>
          Clique aqui para adicionar um pacote de preço em seu Buffet
        </label>
        <div>
          <BlueButton
            onClick={() => navigate("/addPricing")}
            title="Pacote de preço"
          />
        </div>
      </div>
      <div className="personification-contentsDiv">
        <label>Clique aqui para adicionar um tema de festa em seu Buffet</label>
        <div>
          <BlueButton
            onClick={() => navigate("/addTheme")}
            title="Tema festivo"
          />
        </div>
      </div>
      <div className="personification-contentsDiv">
        <label>Clique aqui para adicionar uma descrição no seu perfil</label>
        <div>
          <BlueButton
            onClick={() => navigate("/addDescription")}
            title="Alterar descrição"
          />
        </div>
      </div>
    </div>
  );
};

export default Personalization;
