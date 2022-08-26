import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import SideBar from "../SideBar";

const CompanyLayout = () => {
  const { isAuthenticated, user } = useAuth();

  return isAuthenticated && (user && user.role === 'COMPANY') ? (
    <div className="dashboardCompany-mainDiv">
      <div className="dashboardCompany-sideBar">
        <SideBar email="" />
      </div>
      <div className="dashboardCompany-content">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
}

export default CompanyLayout;