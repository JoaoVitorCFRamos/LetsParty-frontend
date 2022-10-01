import { ChangeEvent, useState } from "react";
import api from "../../../services/api";
import ContractCompleted from "../ContractCompleted";
import ContractTerms from "../ContractTerms";
import Payment from "../Payment";

type Party = {
  //invoiceId: string;
  acceptedTerms: boolean;
  paymentMethod: string;
  paymentInstallments: number;
};

const ContractParty = () => {
  //const params = useParams();
  const [step, setStep] = useState<number>(1);
  const [fields, setFields] = useState<Party>({
    acceptedTerms: false,
    paymentMethod: "",
    paymentInstallments: 1,
  });

  const handlePrevStep = () => {
    setStep((step) => step - 1);
  };

  const handleNextStep = () => {
    setStep((step) => step + 1);
  };

  const onChangeField =
    (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setFields({ ...fields, [field]: event.target.value });
    };

  const handleSubmit = async () => {
    //const id = params.buffetId;
    await api.get("health");
  };

  const handleShowView = () => {
    switch (step) {
      case 1:
        return (
          <ContractTerms
            values={{
              acceptedTerms: fields.acceptedTerms,
            }}
            onChange={onChangeField}
            nextStep={handleNextStep}
          />
        );

      case 2:
        return (
          <Payment
            values={{
              paymentMethod: fields.paymentMethod,
              paymentInstallments: fields.paymentInstallments,
            }}
            onChange={onChangeField}
            previousStep={handlePrevStep}
            nextStep={handleNextStep}
            submit={handleSubmit}
          />
        );

      case 3:
        return <ContractCompleted />;

      default:
        return <></>;
    }
  };

  return <>{handleShowView()}</>;
};

export default ContractParty;
