import "./style.css";
import ProfilePicture from "../ProfilePicture";
import BlueButton from "../BlueButton";
import { useNavigate } from "react-router-dom";
import { addHours, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import AvatarPicture from "../AvatarPicture";

interface IPartyTemplate {
  id: string;
  birthdayPerson: string;
  company: {
    id: string;
  };
  eventDate: Date;
  eventEndDate: Date;
  buffetName: string;
  status: "IN_ANALYSIS" | "APPROVED" | "NOT_APPROVED" | "CONFIRMED";
}

const PartyTemplate = (props: IPartyTemplate) => {
  const navigate = useNavigate();
  const {
    id,
    birthdayPerson,
    company,
    eventDate,
    eventEndDate,
    buffetName,
    status,
  } = props;

  const handleStatus = (
    status: "IN_ANALYSIS" | "APPROVED" | "NOT_APPROVED" | "CONFIRMED"
  ) => {
    if (status === "APPROVED") {
      return "Aprovada. Aguardando pagamento";
    } else if (status === "NOT_APPROVED") {
      return "Não aprovado.";
    } else if (status === "CONFIRMED") {
      return "Confirmada.";
    } else {
      return "Em análise";
    }
  };

  return (
    <div
      className="partyTemplate-mainDiv"
      onClick={() => navigate(`/party/${id}`)}
    >
      <div className="partyTemplate-leftSide">
        <label>
          Aniversariante: &nbsp;
          <label className="partyTemplate-infosBD">{birthdayPerson}</label>
        </label>
        <label>
          Data do evento: &nbsp;
          <label className="partyTemplate-infosBD">
            {format(new Date(eventDate), "dd/MM/yyyy")} -{" "}
            {format(addHours(new Date(eventDate), 3), "H:mm", {
              locale: ptBR,
            })}{" "}
            às{" "}
            {format(addHours(new Date(eventEndDate), 3), "HH:mm", {
              locale: ptBR,
            })}
          </label>
        </label>
        <label>Buffet realizador:</label>
        <div className="partyTemplate-infoBuffet">
          <AvatarPicture companyId={company.id} />
          <label className="partyTemplate-infoBuffetText">{buffetName}</label>
        </div>
      </div>
      <div className="partyTemplate-rightSide">
        <label>
          Status: <label>{handleStatus(status)}</label>{" "}
        </label>
        {status === "APPROVED" ? (
          <BlueButton
            onClick={() => navigate("/party/invoice/1/contract")}
            title="Finalizar contrato"
          />
        ) : undefined}
      </div>
    </div>
  );
};

export default PartyTemplate;
