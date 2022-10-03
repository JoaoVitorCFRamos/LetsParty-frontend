import "./style.css";
import BlueButton from "../../../components/BlueButton";

export const Personification = () => {
    return (
        <div className="personification-mainDiv">
            <div className="personification-contentsDiv">
                <label>Clique aqui para adicionar um serviço Opcional em seu buffet</label>
                <div>
                    <BlueButton onClick={() => { }} title="Adicionar" />
                </div>
            </div>
            <div className="personification-contentsDiv">

                <label>Clique aqui para adicionar um precificações em seu buffet</label>
                <div>
                    <BlueButton onClick={() => { }} title="Adicionar" />
                </div>
            </div>
            <div className="personification-contentsDiv">
                <label>Clique aqui para adicionar um tema de festa em seu buffet</label>
                <div>
                    <BlueButton onClick={() => { }} title="Adicionar" />
                </div>
            </div>
            <div className="personification-contentsDiv">
                <label>Clique aqui para adicionar uma descrição no seu perfil</label>
                <div>
                    <BlueButton onClick={() => { }} title="Adicionar" />
                </div>
            </div>
        </div >
    )
}

export default Personification;