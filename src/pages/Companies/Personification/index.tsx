import "./style.css";
import BlueButton from "../../../components/BlueButton";
import { useNavigate } from "react-router-dom";

export const Personification = () => {

    const navigate = useNavigate();

    return (
        <div className="personification-mainDiv">
            <div className="personification-contentsDiv">
                <label>Clique aqui para adicionar um serviço Opcional em seu buffet</label>
                <div>
                    <BlueButton onClick={() => navigate('/addOptionalService')} title="Adicionar" />
                </div>
            </div>
            <div className="personification-contentsDiv">

                <label>Clique aqui para adicionar um precificações em seu buffet</label>
                <div>
                    <BlueButton onClick={() => navigate('/addPricing')} title="Adicionar" />
                </div>
            </div>
            <div className="personification-contentsDiv">
                <label>Clique aqui para adicionar um tema de festa em seu buffet</label>
                <div>
                    <BlueButton onClick={() => navigate('/addTheme')} title="Adicionar" />
                </div>
            </div>
            <div className="personification-contentsDiv">
                <label>Clique aqui para adicionar uma descrição no seu perfil</label>
                <div>
                    <BlueButton onClick={() => navigate('/addDescription')} title="Adicionar" />
                </div>
            </div>
        </div >
    )
}

export default Personification;