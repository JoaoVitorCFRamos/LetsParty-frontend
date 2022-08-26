import "./style.css";
import ChatTemplate from "../../../components/ChatTemplate";

const ChatCustomer = () => {
  return (
    <>
      <label className="chatCustomer-header">
        Suas conversas com Buffets
      </label>
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
    </>
  );
};

export default ChatCustomer;
