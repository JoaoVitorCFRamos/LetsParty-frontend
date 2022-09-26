import "./style.css";
import ChatTemplate from "../../../components/ChatTemplate";
import api from "../../../services/api";
import { useEffect, useState } from "react";

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
  const [chats, setChats] = useState<IChatCustomer[]>();

  useEffect(() => {
    api.get("/chats/customer").then((response) => {
      setChats(response.data);
    });
  }, []);

  return (
    <div className="chatCustomer-content">
      <label className="chatCustomer-header">Suas conversas com Buffets</label>
      {chats && chats.length > 0 ? (
        <div className="chatCustomer-chats">
          {chats.map((chat, index) => (
            <ChatTemplate
              key={index}
              name={chat.company.profile.name}
              lastMessage={chat.messages[0].content}
              read={chat.messages[0].read}
              owner={chat.messages[0].owner}
              readingUserId={chat.customerId}
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

export default ChatCustomer;
