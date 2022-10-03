import "./style.css";
import ChatTemplate from "../../../components/ChatTemplate";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IChatCustomer {
  id: string;
  customerId: string;
  companyId: string;
  company: {
    profile: {
      name: string;
    };
  };
  messages: [
    {
      content: string;
      read: boolean;
      owner: string;
      sendAt: Date;
    }
  ];
}

const ChatCustomer = () => {
  const navigate = useNavigate();

  const [chats, setChats] = useState<IChatCustomer[]>();

  useEffect(() => {
    api.get("/chats/customer").then((response) => {
      setChats(response.data);
    });
  }, []);

  return (
    <div className="chatCustomer-content" >
      <label className="chatCustomer-header">Suas conversas com Buffets</label>
      {chats && chats.length > 0 ? (
        <div className="chatCustomer-chats" onClick={() => navigate("/chatConversation")}>
          {chats.map((chat, index) => (
            <ChatTemplate
              key={index}
              name={chat.company.profile.name}
              lastMessage={chat.messages.shift()?.content || "Você iniciou uma conversa com este Buffet"}
              read={chat.messages.shift()?.read || null || undefined}
              owner={chat.messages.shift()?.owner || null || undefined}
              readingUserId={chat.customerId}
              sentAt={chat.messages.shift()?.sendAt || null || undefined}
            />
          ))}
        </div>
      ) : (
        <p>Você ainda não possui nenhum chat ativo!</p>
      )}
    </div>
  );
};

export default ChatCustomer;
