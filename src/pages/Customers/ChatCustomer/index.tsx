import "./style.css";
import ChatTemplate from "../../../components/ChatTemplate";

const ChatCustomer = () => {
  return (
    <div className="chatCustomer-content">
      <label className="chatCustomer-header">Suas conversas com Buffets</label>
      <div className="chatCustomer-chats">
        <ChatTemplate />
        <ChatTemplate />
        <ChatTemplate />
        <ChatTemplate />
        <ChatTemplate />
        <ChatTemplate />
        <ChatTemplate />
        <ChatTemplate />
        <ChatTemplate />
      </div>
    </div>
  );
};

export default ChatCustomer;
