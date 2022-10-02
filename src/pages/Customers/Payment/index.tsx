import BlueButton from "../../../components/BlueButton";
import { Dropdown } from "../../../components/Dropdown";
import { formatPrice } from "../InvoiceParty";
import "./style.css";

interface IPayment {
  values: {
    paymentMethod: string;
    totalPrice: number;
    installments: number | "";
  };
  previousStep: () => void;
  nextStep: () => void;
  submit: () => Promise<void>;
  onChange: (
    field: string
  ) => (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Payment = ({
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
        <label className="payment-header">
          Selecione a forma de pagamento de sua preferência.
        </label>
      </div>
      <div className="payment-mainContent">
        <Dropdown title="Cartão de Crédito">
          <div className="payment-dropdown-divCC">
            <input type="text" placeholder="Número do cartão" />
            <div className="payment-dropdown-ValCVV">
              <input type="text" placeholder="Validade" />
              <input type="text" placeholder="CVV" />
            </div>
            <input type="text" placeholder="Nome do titular" />
            <input type="text" placeholder="CPF/CNPJ do titular" />
            <select
              onChange={onChange("installments")}
              placeholder="Número de parcelas"
            >
              <option value="1">
                1x de {formatPrice(values.totalPrice)} sem juros
              </option>
              <option value="2">
                2x de {formatPrice(values.totalPrice / 2)} sem juros
              </option>
              <option value="3">
                3x de {formatPrice(values.totalPrice / 3)} sem juros
              </option>
              <option value="4">
                4x de {formatPrice(values.totalPrice / 4)} sem juros
              </option>
              <option value="5">
                5x de {formatPrice(values.totalPrice / 5)} sem juros
              </option>
              <option value="6">
                6x de {formatPrice(values.totalPrice / 6)} sem juros
              </option>
              <option value="7">
                7x de {formatPrice(values.totalPrice / 7)} sem juros
              </option>
              <option value="8">
                8x de {formatPrice(values.totalPrice / 8)} sem juros
              </option>
              <option value="9">
                9x de {formatPrice(values.totalPrice / 9)} sem juros
              </option>
              <option value="10">
                10x de {formatPrice(values.totalPrice / 10)} sem juros
              </option>
              <option value="11">
                11x de {formatPrice(values.totalPrice / 11)} sem juros
              </option>
              <option value="12">
                12x de {formatPrice(values.totalPrice / 12)} sem juros
              </option>
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
        <Dropdown title="Pix">
          <div className="payment-dropdown-div">
            <label>
              {" "}
              Pix copia e cola: 23sadasd678asd8678sad23123sdasdsad32dsd3as21s{" "}
            </label>
          </div>
        </Dropdown>
        <Dropdown title="Boleto Bancário">
          <div className="payment-dropdown-div"></div>
        </Dropdown>
      </div>
      <div className="payment-buttonDiv">
        <div>
          <BlueButton onClick={handlePreviousStep} title="Voltar" />
        </div>
        <div>
          <BlueButton onClick={handleNextStep} title="Concluir" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
