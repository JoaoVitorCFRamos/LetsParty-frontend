import { useNavigate } from "react-router-dom";
import { BlueButton } from "../../../components/BlueButton";
import "./style.css";

export const Payment = () => {

    const navigate = useNavigate();

    return (
        <div>
            <label>Selecione a forma de pagamento de sua preferência</label>
            <BlueButton onClick={() => navigate('/paymentCompleted')} title="Concluir" />
        </div>
    )
}

export default Payment;