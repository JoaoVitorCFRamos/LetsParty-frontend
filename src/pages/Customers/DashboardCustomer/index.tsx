import React from "react";
import { useAuth } from "../../../contexts/AuthContext";

//Components
import SideBar from "../../../components/SideBar";

//Pages
import "./style.css";
import BuffetCard from "../../../components/BuffetCard";

const DashboardCustomer = () => {
  return (
    <div className="dashboardCustomer-mainDiv">
      <div className="dashboardCustomer-sideBar">
        <SideBar />
      </div>
      <div className="dashboardCustomer-content">
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
      </div>
    </div >
  );
};

export default DashboardCustomer;
