import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../services/api";
import ContractCompleted from "../ContractCompleted";
import ContractTerms from "../ContractTerms";
import Payment from "../Payment";

type IContractParty = {
  companyId: string;
  customerId: string;
  acceptedTerms: boolean;
  paymentMethod: string;
  installments: number | "";
  totalPrice: number;
};

const ContractParty = () => {
  const params = useParams();
  const [step, setStep] = useState<number>(1);
  const [fields, setFields] = useState<IContractParty>({
    customerId: "",
    companyId: "",
    acceptedTerms: false,
    paymentMethod: "",
    installments: "",
    totalPrice: 0,
  });

  const handlePrevStep = () => {
    setStep((step) => step - 1);
  };

  const handleNextStep = () => {
    setStep((step) => step + 1);
  };

  const onChangeTermsCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setFields({
        ...fields,
        acceptedTerms: true,
      });
    } else {
      setFields({
        ...fields,
        acceptedTerms: false,
      });
    }
  };

  const onChangeInstallmentsField =
    (field: string) => (event: ChangeEvent<HTMLSelectElement>) => {
      setFields({ ...fields, [field]: Number(event.target.value) });
    };

  useEffect(() => {
    api.get(`/parties/${params.partyId}`).then((response) => {
      setFields((oldState) => ({
        ...oldState,
        companyId: response.data.company.id,
        customerId: response.data.customer.id,
        totalPrice: Number(response.data.totalPrice),
      }));
    });
  }, [params.partyId]);

  const handleSubmit = async () => {
    try {
      await api
        .put(`/parties/${params.partyId}/finish`, {
          paymentMethod: "CREDIT_CARD",
          installments: fields.installments,
        })
        .then((response) => {
          if (response.status === 200) {
            api
              .get(
                `chats/exists?customerId=${fields.customerId}&companyId=${fields.companyId}`
              )
              .then((response) => {
                if (response.data === false) {
                  api
                    .post(
                      `chats?customerId=${fields.customerId}&companyId=${fields.companyId}`
                    )
                    .catch((error) => {});
                }
              });
          }
        });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const handleShowView = () => {
    switch (step) {
      case 1:
        return (
          <ContractTerms
            values={{
              acceptedTerms: fields.acceptedTerms,
            }}
            onChange={onChangeTermsCheckbox}
            nextStep={handleNextStep}
          />
        );

      case 2:
        return (
          <Payment
            values={{
              totalPrice: fields.totalPrice,
              paymentMethod: fields.paymentMethod,
              installments: fields.installments,
            }}
            onChange={onChangeInstallmentsField}
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
