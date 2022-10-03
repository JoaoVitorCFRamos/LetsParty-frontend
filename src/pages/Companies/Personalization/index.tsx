import "./style.css";
import BlueButton from "../../../components/BlueButton";
import { useNavigate } from "react-router-dom";

const Personalization = () => {
  const navigate = useNavigate();

  return (
    <div className="personification-mainDiv">
      <div className="personification-contentsDiv">
        <label>Cadastrar um serviço opcional em seu Buffet</label>
        <div>
          <BlueButton
            onClick={() => navigate("/addOptionalService")}
            title="Clique aqui"
          />
        </div>
      </div>
      <div className="personification-contentsDiv">
        <label>
          Criar pacotes de preço em seu Buffet
        </label>
        <div>
          <BlueButton
            onClick={() => navigate("/addPricing")}
            title="Clique Aqui"
          />
        </div>
      </div>
      <div className="personification-contentsDiv">
        <label>Cadastrar opções de temas em seu Buffet</label>
        <div>
          <BlueButton
            onClick={() => navigate("/addTheme")}
            title="Clique Aqui"
          />
        </div>
      </div>
      <div className="personification-contentsDiv">
        <label>Alterar descrição do perfil do Buffet</label>
        <div>
          <BlueButton
            onClick={() => navigate("/addDescription")}
            title="Clique Aqui"
          />
        </div>
      </div>
    </div>
  );
};

export default Personalization;
