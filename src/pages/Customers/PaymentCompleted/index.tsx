import { BlueButton } from "../../../components/BlueButton";
import "./style.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const PaymentCompleted = () => {

    const navigate = useNavigate()

    return (
        <div>
            <label>Parabéns!! Pagamento concluído.
                Sua festa foi contratada com sucesso</label>
            <BlueButton onClick={() => navigate('/my-parties')} title="Concluir" />

        </div>
    )
}

export default PaymentCompleted;