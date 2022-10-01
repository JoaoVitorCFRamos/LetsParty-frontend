import { useNavigate } from "react-router-dom";

import "./style.css";
import BlueButton from "../../../components/BlueButton";

const ContractCompleted = () => {
  const navigate = useNavigate();

  return (
    <div className="paymentCompleted-mainDiv">
      <label>Parabéns!! Sua festa foi contratada com sucesso</label>
      <div>
        <BlueButton onClick={() => navigate("/my-parties")} title="Concluir" />
      </div>
    </div>
  );
};

export default ContractCompleted;
