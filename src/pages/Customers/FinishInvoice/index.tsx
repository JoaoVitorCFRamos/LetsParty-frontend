import { useNavigate } from "react-router-dom";
import BlueButton from "../../../components/BlueButton";

const FinishInvoice = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Você terminou</h1>
      <BlueButton
        onClick={() => navigate("/app")}
        title="Voltar à página principal"
      />
    </div>
  );
};

export default FinishInvoice;
