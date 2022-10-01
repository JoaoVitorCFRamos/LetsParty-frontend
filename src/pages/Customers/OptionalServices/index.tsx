import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlueButton from "../../../components/BlueButton";
import CustomCheckBox from "../../../components/CustomCheckbox";
import api from "../../../services/api";
import { formatPrice } from "../InvoiceParty";
import "./style.css";

interface IOptionalServices {
  values: {
    requestedServicesId: string[];
  };
  previousStep: () => void;
  nextStep: () => void;
  submit: () => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface OptionalService {
  id: string;
  name: string;
  price: string;
  category: "FOOD" | "BEVERAGES" | "FUN" | "OTHER";
}

const OptionalServices = ({
  values,
  onChange,
  previousStep,
  nextStep,
  submit,
}: IOptionalServices) => {
  const params = useParams();
  const [services, setServices] = useState<OptionalService[]>();

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

  useEffect(() => {
    api.get(`/companies/${params.buffetId}/services`).then((response) => {
      setServices(response.data);
    });
  }, [params.buffetId]);

  return (
    <div className="optionalServices-mainDiv">
      <div className="optionalServices-topContent">
        <label className="optionalServices-stepOneLabel">Passo 3</label>
        <label className="optionalServices-header">Serviços opcionais</label>
      </div>
      <div className="optionalServices-mainContent">
        <label>Selecione os serviços opcionais caso desejado</label>
        {services?.map((service, index) => (
          <CustomCheckBox
            key={index}
            title={service.name}
            price={formatPrice(Number(service.price))}
            value={service.id}
            checked={
              values.requestedServicesId.includes(service.id) ? true : false
            }
            onChange={onChange}
          />
        ))}
      </div>
      <BlueButton onClick={handlePreviousStep} title="Voltar" />
      <BlueButton onClick={handleNextStep} title="Enviar" />
    </div>
  );
};

export default OptionalServices;
