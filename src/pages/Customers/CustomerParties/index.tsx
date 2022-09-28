import "./style.css";
import PartyTemplate from "../../../components/PartyTemplate";
import { useEffect, useState } from "react";
import api from "../../../services/api";

interface CustomerPartiesParties {

}


const CustomerParties = () => {

  return (
    <div className="customerParties-content">
      <label className="customerParties-header">Minhas festas</label>
      <div className="customerParties-cards">
        <PartyTemplate birthdayPerson="Ana Gabriela" date="26/09/2022" buffetName="Buffet Alegria" stats="Pendente" />
        {/* TODO Integrar com backend */}
      </div>
    </div>
  );
};

export default CustomerParties;
