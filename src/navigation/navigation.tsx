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
import DashboardCompany from "../pages/Companies/DashboardCompany";
import ChatCompany from "../pages/Companies/ChatCompany";
import CustomerParties from "../pages/Customers/CustomerParties";
import RegisterCustomer from "../pages/Customers/RegisterCustomer";
import RegisterCompany from "../pages/Companies/RegisterCompany";
import InvoiceParty from "../pages/Customers/InvoiceParty";
import ContractParty from "../pages/Customers/ContractParty";
import PartyDashboard from "../pages/Customers/PartyDashboard";
import Budgets from "../pages/Companies/Budgets";
import PartyInfo from "../pages/Companies/PartyInfo";
import ChatConversationCustomer from "../pages/Customers/ChatConversationCustomer";
import ChatConversationCompany from "../pages/Companies/ChatConversationCompany";
import Personalization from "../pages/Companies/Personalization";
import AddDescription from "../pages/Companies/AddDescription";
import AddOptionalServices from "../pages/Companies/AddOptionalServices";
import AddPricing from "../pages/Companies/AddPricing";
import AddTheme from "../pages/Companies/AddTheme";

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
        <Route path="/chat/:chatId" element={<ChatConversationCustomer />} />
        <Route path="/buffet/:buffetId" element={<BuffetProfile />} />
        <Route
          path="/buffet/:buffetId/party/invoice"
          element={<InvoiceParty />}
        />
        <Route path="/party/:partyId/contract" element={<ContractParty />} />
        <Route path="/party/:partyId" element={<PartyDashboard />} />
        {/* <Route path="/chatConversation" element={<ChatConversation />} /> */}
      </Route>
      <Route element={<CompanyLayout />}>
        <Route path="/dashboard" element={<DashboardCompany />} />
        <Route path="/chats" element={<ChatCompany />} />
        <Route
          path="/chat/customer/:chatId"
          element={<ChatConversationCompany />}
        />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/party/:partyId/info" element={<PartyInfo />} />
        <Route path="/personalization" element={<Personalization />} />
        <Route path="/addDescription" element={<AddDescription />} />
        <Route path="/addOptionalService" element={<AddOptionalServices />} />
        <Route path="/addTheme" element={<AddTheme />} />
        <Route path="/addPricing" element={<AddPricing />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
