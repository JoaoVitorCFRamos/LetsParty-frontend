import { useNavigate } from "react-router-dom"
import { BlueButton } from "../../../components/BlueButton"
import "./style.css"

export const PartyInformations = () => {

    const navigate = useNavigate();

    return (
        <div className="partyInformations-mainDiv">
            <div className="partyInformations-topContent">
                <label className="partyInformations-stepOneLabel">Passo 1</label>
                <label className="partyInformations-header">Informações Gerais</label>
            </div>
            <div className="partyInformations-mainContent">
                <label>Informe o nome do aniversariante</label>
                <input type="text" />
                <label>Informe a idade do aniversariante</label>
                <select></select>
                <label>Data do evento</label>
                <input type="date" />
                <label>Horario do evento</label>
                <select></select>
            </div>
            <BlueButton onClick={() => navigate('/choosePartyTheme')} title="Continuar" />
        </div >
    )
}

export default PartyInformations