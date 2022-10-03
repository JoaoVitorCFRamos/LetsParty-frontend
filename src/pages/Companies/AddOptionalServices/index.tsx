import BlueButton from "../../../components/BlueButton";
import "./style.css"

export const AddOptionalServices = () => {
    return (
        <div className="addOptionalServices-mainDiv">
            <div className="addOptionalServices-mainContent">
                <label>Informe o serviço e seu preço</label>
                <input type="text" placeholder="Adicone o nome do serviço Opcional" />
                <input type="text" placeholder="Adicone o preço" />
            </div>
            <div className="addOptionalServices-buttonDiv">
                <BlueButton onClick={() => { }} title="Cadastrar" />
            </div>
        </div>
    )
}

export default AddOptionalServices;