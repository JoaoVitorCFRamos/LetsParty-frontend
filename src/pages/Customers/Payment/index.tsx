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
    <div>
      <label>Selecione a forma de pagamento de sua preferência</label>
      <BlueButton onClick={handlePreviousStep} title="Voltar" />
      <BlueButton onClick={handleNextStep} title="Concluir" />
    </div>
  );
};

export default Payment;
