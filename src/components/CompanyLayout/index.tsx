import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import SideBar from "../SideBar";
import SideBarCompanies from "../SideBarCompanies";
import "./styles.css";

const CompanyLayout = () => {
  const { isAuthenticated, user } = useAuth();

  return isAuthenticated && user && user.role === "COMPANY" ? (
    <div className="companyLaoyt-mainDiv">
      <div className="companyLaoyt-sideBar">
        <SideBarCompanies email="" />
      </div>
      <div className="companyLaoyt-content">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

export default CompanyLayout;
