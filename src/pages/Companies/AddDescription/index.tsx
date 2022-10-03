import BlueButton from "../../../components/BlueButton";
import "./style.css"

export const AddDescription = () => {
    return (
        <div className="addDescription-mainDiv">
            <div className="addDescription-mainContent">
                <label>Informe uma descrição para seu buffet</label>
                <textarea className="addDescription-textarea" />
            </div>
            <div className="addDescription-buttonDiv">
                <BlueButton onClick={() => { }} title="Cadastrar" />
            </div>
        </div>
    )
}

export default AddDescription;