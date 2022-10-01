import "./style.css";
import PartyTemplate from "../../../components/PartyTemplate";

const CustomerParties = () => {
  return (
    <div className="customerParties-content">
      <label className="customerParties-header">Minhas festas</label>
      <div className="customerParties-cards">
        <PartyTemplate
          birthdayPerson="Ana Gabriela"
          date={new Date()}
          buffetName="Buffet Alegria"
          status={{ type: "IN_ANALYSIS", message: "Em análise" }}
        />
        {/* TODO Integrar com backend */}
      </div>
    </div>
  );
};

export default CustomerParties;
