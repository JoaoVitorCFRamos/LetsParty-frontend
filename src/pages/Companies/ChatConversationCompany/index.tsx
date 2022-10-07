import "./style.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import { useParams } from "react-router-dom";

interface Chat {
  id: string;
  customerId: string;
  companyId: string;
  customer: {
    profile: {
      fullName: string;
    };
  };
}

interface Message {
  id: string;
  content: string;
  owner: string;
  read: boolean;
  chatRoomId: string;
  sendAt: Date;
}

const ChatConversationCompany = () => {
  const params = useParams();
  const [chat, setChat] = useState<Chat>();
  const [messages, setMessages] = useState<Message[]>();
  const [input, setInput] = useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input !== "") {
      api
        .post(`chats/${chat?.id}/send-message`, {
          ownerId: chat?.companyId,
          content: input,
        })
        .then(() => {
          setInput("");
          getMessages();
        });
    }
  };

  const getMessages = useCallback(() => {
    api.get(`/chats/${chat?.id}/messages`).then((response) => {
      setMessages(response.data);
    });
  }, [chat?.id]);

  useEffect(() => {
    api.get("/chats/company").then((response) => {
      setChat(response.data.find((chat: any) => chat.id === params.chatId));
    });
  }, [params.chatId]);

  useEffect(() => {
    getMessages();

    const interval = setInterval(() => {
      getMessages();
    }, 5000);

    return () => clearInterval(interval);
  }, [getMessages]);

  return (
    <div className="chatConversartion-mainDiv">
      <div className="chatConversation-buffetName">
        <label>{chat?.customer.profile.fullName}</label>
      </div>
      <div className="chatConversation-messages">
        {messages?.map((message) => {
          if (message.owner === chat?.customerId) {
            return (
              <div className="chatConversation-messagesComponentContainer">
                <div className="chatConversation-messageComponentLeft">
                  <label className="chatConversation-nameMessage">
                    {chat.customer.profile.fullName}
                  </label>
                  <label className="chatConversation-messageContent">
                    {message.content}
                  </label>
                </div>
              </div>
            );
          } else {
            return (
              <div className="chatConversation-messagesComponentContainerRight">
                <div className="chatConversation-messageComponentRight">
                  <label className="chatConversation-nameMessage">Você</label>
                  <label className="chatConversation-messageContent">
                    {message.content}
                  </label>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="chatConversation-SendMessageDiv">
        <input
          type="text"
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          onChange={onChange}
          placeholder="Escreva sua mensagem"
        />
        <div className="chatConversation-iconSend">
          <RiSendPlaneFill size={19} />
        </div>
      </div>
    </div>
  );
};

export default ChatConversationCompany;
