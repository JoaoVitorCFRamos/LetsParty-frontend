import "./style.css";
import BuffetCard from "../../../components/BuffetCard";

const DashboardCustomer = () => {
  return (
    <>
      <div className="dashboardCustomer-divHigher">
        <label>Os melhores buffets da sua região</label>
        <select >
          <option >Selecione seu estado</option>
          <option >São Paulo</option>
          <option >Brasília</option>
          <option >Rio de Janeiro</option>
        </select>
      </div>
      <div className="dashboardCustomer-divBottom">
        <BuffetCard />
        <BuffetCard />
        <BuffetCard />
        <BuffetCard />
        <BuffetCard />
        <BuffetCard />
      </div>
    </>
  );
};

export default DashboardCustomer;
