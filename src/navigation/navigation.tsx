import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../contexts/AuthContext";

//Pages
import TestCompanyComponent from "../components/TestCompanyComponent";
import DashboardCustomer from "../pages/Customers/DashboardCustomer";
import LandingPage from "../pages/LandingPage";
import LoginCompany from "../pages/Companies/LoginCompany";
import LoginCustomer from "../pages/Customers/LoginCustomer";
import Register from "../pages/Register";
import Favorites from "../pages/Customers/Favorites";
import ChatCustomer from "../pages/Customers/ChatCustomer";
import BuffetProfile from "../pages/Customers/BuffetProfile";

export const Navigation = () => {
  const { loading } = useAuth();

  if (loading) {
    return <div>Carregando....</div>;
  }

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginCustomer />} />
      <Route path="/login-business" element={<LoginCompany />} />
      <Route element={<ProtectedRoute roleRequired="CUSTOMER" />}>
        <Route path="/platform" element={<DashboardCustomer />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/chat" element={<ChatCustomer />} />
        <Route path="/buffetProfile" element={<BuffetProfile />} />
      </Route>
      <Route element={<ProtectedRoute roleRequired="COMPANY" />}>
        <Route path="/dashboard" element={<TestCompanyComponent />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
