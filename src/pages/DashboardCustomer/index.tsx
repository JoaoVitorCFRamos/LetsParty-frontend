import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

//Components
import SideBar from '../../components/SideBar';

//Pages
import "./style.css";



const DashboardCustomer = () => {
    return (
        <div className="dashboardCustomer-mainDiv">
            <SideBar />
        </div>
    )
}

export default DashboardCustomer;