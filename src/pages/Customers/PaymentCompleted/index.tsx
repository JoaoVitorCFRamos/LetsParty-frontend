import { BlueButton } from "../../../components/BlueButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./style.css"

export const PaymentCompleted = () => {

    const navigate = useNavigate()

    return (
        <div className="paymentCompleted-mainDiv">
            <label>Parabéns!! Pagamento concluído.
                Sua festa foi contratada com sucesso</label>
            <div>

                <BlueButton onClick={() => navigate('/my-parties')} title="Concluir" />
            </div>

        </div>
    )
}

export default PaymentCompleted;