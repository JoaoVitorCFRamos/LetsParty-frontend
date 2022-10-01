import BlueButton from "../../../components/BlueButton";
import "./style.css";
import React, { useEffect, useState } from "react";
import api, { apiUrl } from "../../../services/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface IChoosePartyTheme {
  values: {
    partyThemeId: string;
  };
  previousStep: () => void;
  nextStep: () => void;
  onChange: (
    field: string
  ) => (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface BuffetPartyTheme {
  id: string;
  name: string;
}

const ChoosePartyTheme = ({
  values,
  onChange,
  previousStep,
  nextStep,
}: IChoosePartyTheme) => {
  const [partyThemes, setPartyThemes] = useState<BuffetPartyTheme[]>();
  const params = useParams();

  const handlePreviousStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    previousStep();
  };

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (values.partyThemeId === "") {
      toast.error("Por favor, informe o tema da festa");
    } else {
      nextStep();
    }
  };

  useEffect(() => {
    api.get(`/companies/${params.buffetId}/party-themes`).then((response) => {
      setPartyThemes(response.data);
    });
  }, [params.buffetId]);

  return (
    <div className="choosePartyTheme-mainDiv">
      <div className="choosePartyTheme-topContent">
        <label className="choosePartyTheme-stepOneLabel">Passo 2</label>
        <label className="choosePartyTheme-header">Tema da festa</label>
      </div>
      <div className="choosePartyTheme-mainContent">
        <label>Escolha qual será o tema da festa</label>

        {partyThemes && partyThemes?.length > 0 ? (
          <>
            <select
              onChange={onChange("partyThemeId")}
              value={values.partyThemeId}
            >
              <option value="" disabled hidden>
                Selecione uma opção
              </option>
              {partyThemes?.map((theme, index) => (
                <option key={index} value={theme.id}>
                  {theme.name}
                </option>
              ))}
            </select>
            {values.partyThemeId !== "" ? (
              <div>
                <img
                  src={`${apiUrl}/companies/party-themes/${values.partyThemeId}/image`}
                />
              </div>
            ) : undefined}
          </>
        ) : undefined}
      </div>
      <BlueButton onClick={handlePreviousStep} title="Voltar" />
      <BlueButton onClick={handleNextStep} title="Continuar" />
    </div>
  );
};

export default ChoosePartyTheme;
