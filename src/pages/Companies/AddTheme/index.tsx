import BlueButton from "../../../components/BlueButton";
import "./style.css"

export const AddTheme = () => {
    return (
        <div className="addOptionalServices-mainDiv">
            <div className="addOptionalServices-mainContent">
                <label>Informe o tema e manda uma foto dele para nós</label>
                <input type="text" placeholder="Adicone o nome do serviço Tema" />
                <div></div>
            </div>
            <div className="addOptionalServices-buttonDiv">
                <BlueButton onClick={() => { }} title="Cadastrar" />
            </div>
        </div>
    )
}

export default AddTheme;