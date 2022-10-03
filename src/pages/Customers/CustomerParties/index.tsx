import "./style.css";
import PartyTemplate from "../../../components/PartyTemplate";
import { useEffect, useState } from "react";
import api from "../../../services/api";

interface PartySummary {
  id: string;
  company: {
    id: string;
    name: string;
  };
  eventDate: Date;
  eventEndDate: Date;
  birthdayPerson: string;
  status: "IN_ANALYSIS" | "APPROVED" | "NOT_APPROVED" | "CONFIRMED";
}

const CustomerParties = () => {
  const [parties, setParties] = useState<PartySummary[]>();

  useEffect(() => {
    api.get("/parties/customer").then((response) => {
      setParties(response.data);
    });
  }, []);

  return (
    <div className="customerParties-content">
      <label className="customerParties-header">Minhas festas</label>
      {parties && parties.length > 0 ? (
        <div className="customerParties-cards">
          {parties.map((party, index) => (
            <div className="customerParties-card">
              <PartyTemplate
                key={index}
                id={party.id}
                company={party.company}
                birthdayPerson={party.birthdayPerson}
                eventDate={party.eventDate}
                eventEndDate={party.eventEndDate}
                buffetName={party.company.name}
                status={party.status}
              />
            </div>
          ))}
        </div>
      ) : (
        <h1>Você ainda não contratou nenhuma festa</h1>
      )}
    </div>
  );
};

export default CustomerParties;
