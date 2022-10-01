import "./style.css";
import ProfilePicture from "../ProfilePicture";
import BlueButton from "../BlueButton";
import { useNavigate } from "react-router-dom";

interface IPartyTemplate {
  //id: string;
  birthdayPerson: string;
  date: Date;
  buffetName: string;
  status: {
    type: "IN_ANALYSIS" | "APPROVED" | "NOT_APPROVED";
    message: string;
  };
}

const PartyTemplate = (props: IPartyTemplate) => {
  const navigate = useNavigate();
  const { birthdayPerson, date, buffetName, status } = props;

  return (
    <div className="partyTemplate-mainDiv">
      <div className="partyTemplate-leftSide">
        <label>
          Aniversariante: &nbsp;
          <label className="partyTemplate-infosBD">{birthdayPerson}</label>
        </label>
        <label>
          Data do evento: &nbsp;
          <label className="partyTemplate-infosBD">
            {date.toLocaleDateString()} - {date.toLocaleTimeString()} às{" "}
            {date.toLocaleTimeString()}
          </label>
        </label>
        <label>Buffet realizador:</label>
        <ProfilePicture />
        <label className="partyTemplate-infosBD">{buffetName}</label>
      </div>
      <div className="partyTemplate-rightSide">
        <label>
          Status: <label>{status.message}</label>{" "}
        </label>
        <BlueButton
          onClick={() => navigate("/party/invoice/1/contract")}
          title="Finalizar contrato"
        />
        <label className="partyTemplate-labelSeeMore">Ver mais</label>
      </div>
    </div>
  );
};

export default PartyTemplate;
