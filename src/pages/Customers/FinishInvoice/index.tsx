import { useNavigate } from "react-router-dom";
import BlueButton from "../../../components/BlueButton";
import "./style.css";

const FinishInvoice = () => {
  const navigate = useNavigate();

  return (
    <div className="paymentCompleted-mainDiv">
      <label>Muito bem! Você concluiu as etapas de montagem da sua festa</label>
      <h2 style={{ marginTop: 10}}>
        Seu pedido será analisado. Muito em breve o Buffet irá fazer a liberação do
        seu pedido, e você poderá continuar para efetivação do contrato e
        pagamento.
      </h2>
      <div className="">
        <BlueButton onClick={() => navigate("/my-parties")} title="Concluir" />
      </div>
    </div>
  );
};

export default FinishInvoice;
