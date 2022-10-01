import { useNavigate } from "react-router-dom";
import { BlueButton } from "../../../components/BlueButton";
import { Dropdown } from "../../../components/Dropdown";
import "./style.css";
import BlueButton from "../../../components/BlueButton";

interface IPayment {
  values: {
    paymentMethod: string;
    paymentInstallments: number;
  };
  previousStep: () => void;
  nextStep: () => void;
  submit: () => Promise<void>;
  onChange: (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Payment = ({
  values,
  onChange,
  previousStep,
  nextStep,
  submit,
}: IPayment) => {
  const handlePreviousStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    previousStep();
  };



  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    submit().then(() => {
      nextStep();
    });
  };

  return (
    <div className="payment-mainDiv">
      <div className="payment-topContent">
        <label className="payment-header">Selecione a forma de pagamento de sua preferência.</label>
      </div>
      <div className="payment-mainContent">
        <Dropdown title="Pix" >
          <div className="payment-dropdown-div">
            <label> Pix copia e cola: 23sadasd678asd8678sad23123sdasdsad32dsd3as21s </label>
          </div>
        </Dropdown>
        <Dropdown title="Boleto bancário">
          <div className="payment-dropdown-div">
            <label>Pix copia e cola: 2312432-432131-23123sdasdsad32dsd3as21s</label>
            <label>|||||| |||||| ||||||||| ||||||||| |||||| ||||||| ||||| ||||| ||||| ||||| </label>
          </div>
        </Dropdown>
        <Dropdown title="Cartão de Crédito">
          <div className="payment-dropdown-divCC">
            <input type="text" placeholder="Número do cartão" />
            <div className="payment-dropdown-ValCVV">
              <input type="text" placeholder="Validade" />
              <input type="text" placeholder="CVV" />
            </div>
            <input type="text" placeholder="Nome do titular" />
            <input type="text" placeholder="CPF/CNPJ do titular" />
            <select placeholder="Número de parcelas">
              <option value="valor1">----Número de parcelas----</option>
              <option value="valor2" selected>Valor 2</option>
              <option value="valor3">Valor 3</option>
            </select>
          </div>
        </Dropdown>
        <Dropdown title="Cartão de Débito">
          <div className="payment-dropdown-divCC">
            <input type="text" placeholder="Número do cartão" />
            <div className="payment-dropdown-ValCVV">
              <input type="text" placeholder="Validade" />
              <input type="text" placeholder="CVV" />
            </div>
            <input type="text" placeholder="Nome do titular" />
            <input type="text" placeholder="CPF/CNPJ do titular" />
          </div>
        </Dropdown>

      </div >
      <div className="payment-buttonDiv">

        <BlueButton onClick={handlePreviousStep} title="Voltar" />
        <BlueButton onClick={handleNextStep} title="Concluir" />
      </div>
    </div >

};

export default Payment;
