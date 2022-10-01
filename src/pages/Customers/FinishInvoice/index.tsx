import { useNavigate } from "react-router-dom";
import BlueButton from "../../../components/BlueButton";
import "./style.css"


const FinishInvoice = () => {
  const navigate = useNavigate();

  return (
    // <div>
    //   <h1>Você terminou</h1>
    //   <BlueButton
    //     onClick={() => navigate("/app")}
    //     title="Voltar à página principal"
    //   />
    // </div>


    <div className="paymentCompleted-mainDiv">
      <label>Você terminou</label>
      <div>
        <BlueButton onClick={() => navigate("/app")} title="Concluir" />
      </div>
    </div>
  );
};


export default FinishInvoice;
