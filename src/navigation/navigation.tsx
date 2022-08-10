import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import TestCompanyComponent from "../components/TestCompanyComponent";
import TestCustomerComponent from "../components/TestCustomerComponent";
import { useAuth } from "../contexts/AuthContext";
import LandingPage from "../pages/LandingPage";
import LoginCompany from "../pages/LoginCompany";
import LoginCustomer from "../pages/LoginCustomer";
import Register from "../pages/Register";

export const Navigation = () => {
  const { loading } = useAuth();

  if(loading) {
    return <div>Carregando....</div>
  }

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginCustomer />} />
      <Route path="/login-business" element={<LoginCompany /> } />
      <Route element={<ProtectedRoute roleRequired="CUSTOMER" />} >
        <Route path="/platform" element={<TestCustomerComponent />} />
      </Route>
      <Route element={<ProtectedRoute roleRequired="COMPANY" />} >
        <Route path="/dashboard" element={<TestCompanyComponent />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
