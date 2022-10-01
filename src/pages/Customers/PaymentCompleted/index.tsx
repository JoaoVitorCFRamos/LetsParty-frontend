import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./style.css"
import BlueButton from "../../../components/BlueButton";

export const PaymentCompleted = () => {

    const navigate = useNavigate()

    return (
        <div className="paymentCompleted-mainDiv">
            <label>Parabéns!! Pagamento concluído.
                Sua festa foi contratada com sucesso</label>
            <div className="paymentCompleted-buttonDiv">

                <BlueButton onClick={() => navigate('/my-parties')} title="Concluir" />
            </div>

        </div>
    )
}

export default PaymentCompleted;