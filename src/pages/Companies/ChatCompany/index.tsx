import { useEffect, useState } from "react";
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
              name={chat.customer.profile.fullName}
              lastMessage={chat.messages[0].content}
              read={chat.messages[0].read}
              readingUserId={chat.companyId}
              owner={chat.messages[0].owner}
              sentAt={chat.messages[0].sendAt}
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
