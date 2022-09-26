import "./style.css";
import PartyTemplate from "../../../components/PartyTemplate";

const CustomerParties = () => {
  return (
    <div className="customerParties-content">
      <label className="customerParties-header">Minhas festas</label>
      <div className="customerParties-cards">
        {/* TODO Integrar com backend */}
        <PartyTemplate />
      </div>
    </div>
  );
};

export default CustomerParties;
