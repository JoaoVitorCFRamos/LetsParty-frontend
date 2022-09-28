import { useNavigate } from "react-router-dom"
import { BlueButton } from "../../../components/BlueButton"
import CustomCheckBox from "../../../components/CustomCheckbox";
import "./style.css"

export const OptionalServices = () => {

    const navigate = useNavigate();

    return (
        <div className="optionalServices-mainDiv">
            <div className="optionalServices-topContent">
                <label className="optionalServices-stepOneLabel">Passo 3</label>
                <label className="optionalServices-header">Serviços opcionais</label>
            </div>
            <div className="optionalServices-mainContent">
                <label>Selecione os serviços opcionais caso desejado</label>
                <CustomCheckBox title="One" />
                <CustomCheckBox title="One" />
                <CustomCheckBox title="One" />
                <CustomCheckBox title="One" />

            </div>
            <BlueButton onClick={() => navigate('/contractTerms')} title="Ir para o pagamento" />
        </div >
    )
}

export default OptionalServices; 