import "./style.css";
import ChatTemplate from "../../../components/ChatTemplate";
import api from "../../../services/api";
import { useState } from "react";

const ChatCustomer = () => {
  const [profileCompany, setProfileCompany] = useState([]);

  const GetCompanies = () => {
    api.get("/companies").then((response) => {
      setProfileCompany(response.data);
    });
  };

  // console.log(profileCompany);

  return (
    <div className="chatCustomer-content">
      <label className="chatCustomer-header">Suas conversas com Buffets</label>
      <div className="chatCustomer-chats">
        <ChatTemplate
          name={"Name Company"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
        <ChatTemplate
          name={"Name Company1"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
        <ChatTemplate
          name={"Name Company"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
        <ChatTemplate
          name={"Name Company"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
        <ChatTemplate
          name={"Name Company"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
      </div>
    </div>
  );
};

export default ChatCustomer;
