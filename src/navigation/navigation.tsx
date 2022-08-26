import React from "react";
import { Routes, Route } from "react-router-dom";
import TestCompanyComponent from "../components/TestCompanyComponent";
import DashboardCustomer from "../pages/Customers/DashboardCustomer";
import LandingPage from "../pages/LandingPage";
import LoginCompany from "../pages/Companies/LoginCompany";
import LoginCustomer from "../pages/Customers/LoginCustomer";
import Register from "../pages/Register";
import Favorites from "../pages/Customers/Favorites";
import ChatCustomer from "../pages/Customers/ChatCustomer";
<<<<<<< HEAD
import BuffetProfile from "../pages/Customers/BuffetProfile";
=======
import CustomerLayout from "../components/CustomerLayout";
import CompanyLayout from "../components/CompanyLayout";
import NotFound from "../components/NotFound";
>>>>>>> 7175b7b9a2a529e53f36ef8ae0e5d9bcacf54061

const Navigation = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginCustomer />} />
      <Route path="/login-business" element={<LoginCompany />} />
      <Route element={<CustomerLayout />}>
        <Route path="/app" element={<DashboardCustomer />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/chat" element={<ChatCustomer />} />
        <Route path="/buffetProfile" element={<BuffetProfile />} />
      </Route>
      <Route element={<CompanyLayout />}>
        <Route path="/dashboard" element={<TestCompanyComponent />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
