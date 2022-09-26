import { FC } from "react";
import "./style.css";

interface PartyTemplateProps {}

const PartyTemplate: FC<PartyTemplateProps> = (props) => {
  return (
    <div className="partyTemplate-mainDiv">
      <div className="partyTemplate-logoCompany"></div>
      <div className="partyTemplate-info">
        {/* <label className="partyTemplate-nameCompany">{name}</label> */}
        {/* <label className="partyTemplate-lastMessage">{lastMessage}</label> */}
        {/* Colocar atributos que compoem o card */}
      </div>
    </div>
  );
};

export default PartyTemplate;
