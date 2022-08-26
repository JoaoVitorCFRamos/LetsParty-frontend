import { useCallback, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Loading from "../Loading";
import SideBar from "../SideBar";

type Profile = {
  email: string;
}

const CustomerLayout = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile>({ email: "" });
  const { isAuthenticated, user, getProfile } = useAuth();

  const fetchGetProfile = useCallback(async () => {
    try {
      setLoading(true);
      
      const response = await getProfile();
      
      if(response !== undefined) {
        setProfile({ email: response.email});
      }
      
    } catch(error) {
       setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [getProfile]);

  useEffect(() => {
    fetchGetProfile();
  }, [fetchGetProfile]);

  return !loading ? (isAuthenticated && (user && user.role === 'CUSTOMER') ? (
    <div className="dashboardCustomer-mainDiv">
      <div className="dashboardCustomer-sideBar">
       <SideBar email={profile.email} />
      </div>
      <div className="dashboardCustomer-content">
        <Outlet />
      </div>
    </div>
    ) : (
      <Navigate to="/" replace/>
    )) : (
    <Loading />
  );
}

export default CustomerLayout;