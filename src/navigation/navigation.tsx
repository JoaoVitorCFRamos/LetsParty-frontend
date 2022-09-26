import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardCustomer from "../pages/Customers/DashboardCustomer";
import LandingPage from "../pages/LandingPage";
import LoginCompany from "../pages/Companies/LoginCompany";
import LoginCustomer from "../pages/Customers/LoginCustomer";
import Favorites from "../pages/Customers/Favorites";
import ChatCustomer from "../pages/Customers/ChatCustomer";
import BuffetProfile from "../pages/Customers/BuffetProfile";
import CustomerLayout from "../components/CustomerLayout";
import CompanyLayout from "../components/CompanyLayout";
import NotFound from "../components/NotFound";

//Companies Components
import DashboardCompany from "../pages/Companies/DashboardCompany";
import ChatCompany from "../pages/Companies/ChatCompany";
import CustomerParties from "../pages/Customers/CustomerParties";
import RegisterCustomer from "../pages/Customers/RegisterCustomer";
import RegisterCompany from "../pages/Companies/RegisterCompany";

const Navigation = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/register-customer" element={<RegisterCustomer />} />
      <Route path="/register-company" element={<RegisterCompany />} />
      <Route path="/login" element={<LoginCustomer />} />
      <Route path="/login-business" element={<LoginCompany />} />
      <Route element={<CustomerLayout />}>
        <Route path="/app" element={<DashboardCustomer />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-parties" element={<CustomerParties />} />
        <Route path="/chat" element={<ChatCustomer />} />
        <Route path="/buffet/:buffetId" element={<BuffetProfile />} />
      </Route>
      <Route element={<CompanyLayout />}>
        <Route path="/dashboard" element={<DashboardCompany />} />
        <Route path="/chats" element={<ChatCompany />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
