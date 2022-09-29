import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom"
import { BlueButton } from "../../../components/BlueButton"
import api from "../../../services/api";
import "./style.css"

export const PartyInformations = () => {
    const navigate = useNavigate();

    const [fields, setFields] = useState({
        birthdayPerson: "",
        birthdayAge: "",
        eventDate: "",
        numberOfGuests: "",
    })

    const onChangeFields =
        (field: string) =>
            (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setFields({ ...fields, [field]: event.target.value });
            };


    const registerCustomer = () => {
        api.post("/parties", fields);
        // navigate("/login");
    };

    return (
        <div className="partyInformations-mainDiv">
            <div className="partyInformations-topContent">
                <label className="partyInformations-stepOneLabel">Passo 1</label>
                <label className="partyInformations-header">Informações Gerais</label>
            </div>
            <div className="partyInformations-mainContent">
                <label>Informe o nome do aniversariante</label>
                <input type="text" onChange={onChangeFields("birthdayPerson")} value={fields.birthdayPerson} />
                <label>Informe a idade do aniversariante</label>
                <select></select>
                <label>Data do evento</label>
                <input type="date" onChange={onChangeFields("eventDate")} value={fields.eventDate} />
                <label>Horario do evento</label>
                <select></select>
            </div>
            <BlueButton onClick={() => navigate('/choosePartyTheme')} title="Continuar" />
        </div >
    )
}

export default PartyInformations