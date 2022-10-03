import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatTemplate from "../../../components/ChatTemplate";
import api from "../../../services/api";
import "./style.css";

interface IChatCompany {
  id: string;
  customerId: string;
  companyId: string;
  customer: {
    profile: {
      fullName: string;
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

const ChatCompany = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState<IChatCompany[]>();

  useEffect(() => {
    api.get("/chats/company").then((response) => {
      setChats(response.data);
    });
  }, []);

  return (
    <div className="chatCompany-content">
      <label className="chatCompany-header">Conversas com clientes</label>
      {chats && chats?.length > 0 ? (
        <div className="chatCompany-chats">
          {chats.map((chat, index) => (
            <ChatTemplate
              key={index}
              id={chat.id}
              name={chat.customer.profile.fullName}
              lastMessage={
                chat.messages.shift()?.content ||
                "Você iniciou uma conversa com este Cliente"
              }
              read={chat.messages.shift()?.read || null || undefined}
              owner={chat.messages.shift()?.owner || null || undefined}
              readingUserId={chat.customerId}
              sentAt={chat.messages.shift()?.sendAt || null || undefined}
              onClick={() => navigate(`/chat/customer/${chat.id}`)}
            />
          ))}
        </div>
      ) : (
        <p>Você ainda não possui nenhum chat ativo!</p>
      )}
    </div>
  );
};
export default ChatCompany;
