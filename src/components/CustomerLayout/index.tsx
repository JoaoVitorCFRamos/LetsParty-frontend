import { useCallback, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import api from "../../services/api";
import Loading from "../Loading";
import SideBar from "../SideBar";
import "./styles.css";

const CustomerLayout = () => {
  const [loading, setLoading] = useState(false);
  const [customerName, setCustomerName] = useState<string>("");
  const { isAuthenticated, user } = useAuth();

  const fetchGetProfile = useCallback(async () => {
    try {
      setLoading(true);
      const { data: customer } = await api.get('/customers/me');
      setCustomerName(customer.profile.fullName);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGetProfile();
  }, [fetchGetProfile, isAuthenticated]);

  return !loading ? (
    isAuthenticated && user && user.role === "CUSTOMER" ? (
      <div className="customerLayout-mainDiv">
        <div className="customerLayout-sideBar">
          <SideBar customerName={customerName} />
        </div>
        <div className="customerLayout-content">
          <Outlet />
        </div>
      </div>
    ) : (
      <Navigate to="/" replace />
    )
  ) : (
    <Loading />
  );
};

export default CustomerLayout;
