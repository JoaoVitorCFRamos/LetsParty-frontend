import BlueButton from "../../../components/BlueButton";
import "./style.css"

export const AddPricing = () => {
    return (
        <div className="addPricing-mainDiv">
            <div className="addPricing-mainContent">
                <label>Informe o número de convidados e o preço do serviço</label>
                <input type="text" placeholder="Adicone o numero de condidados" />
                <input type="text" placeholder="Adicone o preço" />
            </div>
            <div className="addPrincing-buttonDiv">
                <BlueButton onClick={() => { }} title="Cadastrar" />
            </div>
        </div>
    )
}

export default AddPricing;