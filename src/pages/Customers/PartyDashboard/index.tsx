import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { BlueButton } from "../../../components/BlueButton";
import api from "../../../services/api";
import { profile } from "console";
import "./style.css"


interface PartyDashboard {
    profile: {
        fullName: string;
    }
}


export const PartyDashboard = () => {
    const navigate = useNavigate();
    const [custumer, setCustomer] = useState<PartyDashboard>();

    const getCustumer = () => {

        api.get('/customers/me').then((response) => {
            setCustomer(response.data);
        });
    }

    useEffect(() => {
        getCustumer()
    }, [])

    return (
        <div className="partyDashboard-mainDiv">
            <div className="partyDashboard-topContent">
                <label className="partyDashboard-header">Olá {custumer?.profile.fullName}, veja as informações de sua festa </label>
            </div>
            <div className="partyDashboard-mainContent">
                <div className="partyDashboard-leftCards">
                    <div>
                        <h1>Informações pessoais</h1>
                        <label><span className="partyDashboard-spans">Nome da aniversariante:</span> Ana Beatriz</label>
                        <label><span className="partyDashboard-spans">Idade a festejar:</span>10</label>
                    </div>
                    <div>
                        <h1>Informações da festa</h1>
                        <label><span className="partyDashboard-spans">Data escolhida:</span> 10/12/2022</label>
                        <label><span className="partyDashboard-spans">Numero de convidados:</span>Numero de convidados: 300 pessoas</label>
                        <label><span className="partyDashboard-spans">Tema escolhido:</span> Ben 10</label>
                        <label><span className="partyDashboard-spans">Serviços opcionais selecionados:</span> Homem fantasiado
                            Cerimonia de entrada
                        </label>
                        <label><span className="partyDashboard-spans">Status: </span>Aprovada. Aguardando pagamento</label>
                    </div>
                    <div>
                        <h1>Informações de pagamento</h1>
                        <label><span className="partyDashboard-spans">Valor da festa:</span> R$ 3.000,00</label>
                        <label><span className="partyDashboard-spans">Forma de pagamento: </span>Cartão de crédito</label>
                        <label><span className="partyDashboard-spans">Parcelas:</span> 5</label>
                    </div>
                </div>
                <div className="partyDashboard-rightCards">
                    <div>

                        <label><span className="partyDashboard-spans">Nome da Buffet:</span> Buffet Alegria</label>
                        <label className="partyDashboard-contact">Clique aqui para entrar em contato via chat</label>
                    </div>
                </div>
            </div>
            <div className="partyDashboard-buttonDiv">
                <BlueButton onClick={() => navigate('/contractTerms')} title="Ir para o pagamento " />
            </div>
        </div >
    )
}

export default PartyDashboard;