import { useNavigate } from "react-router-dom"
import { BlueButton } from "../../../components/BlueButton"
import "./style.css"

export const ChoosePartyTheme = () => {

    const navigate = useNavigate();

    return (
        <div className="choosePartyTheme-mainDiv">
            <div className="choosePartyTheme-topContent">
                <label className="choosePartyTheme-stepOneLabel">Passo 2</label>
                <label className="choosePartyTheme-header">Escolha e tema da festa</label>
            </div>
            <div className="choosePartyTheme-mainContent">
                <label>Selecione o tema de festa desejado</label>
                <select></select>
                <div>
                    <img></img>
                </div>
            </div>
            <BlueButton onClick={() => navigate('/optionalServices')} title="Continuar " />
        </div >
    )
}

export default ChoosePartyTheme;