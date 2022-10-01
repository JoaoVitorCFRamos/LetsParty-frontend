import { addDays, format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BlueButton from "../../../components/BlueButton";
import api from "../../../services/api";
import "./style.css";

interface IPartyInformation {
  values: {
    birthdayPerson: string;
    birthdayAge: number;
    pricingId: string;
    eventDate: string;
    eventHourId: string;
  };
  nextStep: () => void;
  onChange: (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (
    field: string
  ) => (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface Pricing {
  id: string;
  numberOfGuests: number;
}

const PartyInformations = ({
  values,
  nextStep,
  onChange,
  onChangeSelect,
}: IPartyInformation) => {
  const [pricings, setPricings] = useState<Pricing[]>();
  const params = useParams();

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (values.birthdayPerson === "") {
      toast.error("Por favor, informe o nome do aniversariante");
    } else if (values.birthdayAge === 0) {
      toast.error("Por favor, informe o a idade do aniversariante");
    } else if (values.pricingId === "") {
      toast.error("Por favor, informe a quantidade de convidados");
    } else if (values.eventDate === "") {
      toast.error("Por favor, escolha uma data para o evento");
    } else {
      nextStep();
    }
  };

  useEffect(() => {
    api.get(`/companies/${params.buffetId}/pricings`).then((response) => {
      setPricings(response.data);
    });
  }, [params.buffetId]);

  return (
    <div className="partyInformations-mainDiv">
      <div className="partyInformations-topContent">
        <label className="partyInformations-stepOneLabel">Passo 1</label>
        <label className="partyInformations-header">Informações Gerais</label>
      </div>
      <div className="partyInformations-mainContent">
        <label>Qual o nome do aniversariante?</label>
        <input
          type="text"
          onChange={onChange("birthdayPerson")}
          value={values.birthdayPerson}
        />
        <label>Qual a idade que o aniversariante irá completar?</label>
        <input
          type="number"
          onChange={onChange("birthdayAge")}
          value={values.birthdayAge}
        />
        <label>Festa para quantos convidados?</label>
        <select onChange={onChangeSelect("pricingId")} value={values.pricingId}>
          <option value="" disabled hidden>
            Selecione uma opção
          </option>
          {pricings?.map((pricing, index) => (
            <option key={index} value={pricing.id}>
              {pricing.numberOfGuests} convidados
            </option>
          ))}
        </select>
        <label>Data do evento</label>
        <input
          type="date"
          min={format(addDays(new Date(), 1), "yyyy-MM-dd")}
          onChange={onChange("eventDate")}
          value={values.eventDate.toString()}
        />
        <label>Horário do evento</label>
        <select
          value={values.eventHourId}
          disabled={values.eventDate !== null ? false : true}
          onChange={onChangeSelect("eventHourId")}
        >
          <option value="" disabled hidden>
            Selecione uma opção
          </option>
          <optgroup label="Período vespertino">
            <option key={0} value="1">
              12:00 - 16:00
            </option>
            <option key={1} value="2">
              12:30 - 16:30
            </option>
            <option key={2} value="3">
              13:00 - 17:00
            </option>
            <option key={3} value="4">
              13:30 - 17:30
            </option>
          </optgroup>
          <optgroup label="Período noturno">
            <option key={4} value="5">
              18:00 - 22:00
            </option>
            <option key={5} value="6">
              18:30 - 22:30
            </option>
            <option key={6} value="7">
              19:00 - 23:00
            </option>
            <option key={7} value="8">
              19:30 - 23:30
            </option>
            <option key={8} value="9">
              20:00 - 00:00
            </option>
          </optgroup>
        </select>
      </div>
      <div className="partyInformations-divButton">

        <BlueButton onClick={handleNextStep} title="Continuar" />
      </div>
    </div>
  );
};

export default PartyInformations;
