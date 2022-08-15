import React from "react";
import { useAuth } from "../../../contexts/AuthContext";

//Components
import SideBar from "../../../components/SideBar";

//Pages
import "./style.css";

const DashboardCustomer = () => {
  return (
    <div className="dashboardCustomer-mainDiv">
      <div className="dashboardCustomer-sideBar">
        <SideBar></SideBar>
      </div>
      <div className="dashboardCustomer-content">
        <h2>Os melhores buffets da sua região</h2>
      </div>
    </div>
  );
};

export default DashboardCustomer;
